import React from "react";
import { useState } from "react";
import CleaningInfo from "../CleaningInfo/CleaningInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ConfirmationBox from "../../../commons/ConfirmationBox/confirmationBox";
import Review from "../Review/Review";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import "./BookNow.css";

function BookNow() {
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [noOfBedrooms, setNoOfBedrooms] = useState(0);
  const [noOfBathrooms, setNoOfBathrooms] = useState(0);
  const [noOfLivingrooms, setNoOfLivingrooms] = useState(0);
  const [noOfKitchens, setNoOfKitchens] = useState(0);
  const [date, setDate] = useState(dayjs("2023-04-01"));
  const [time, setTime] = useState(dayjs("2022-04-01T12:00"));
  const [serverMessage, setServerMessage] = useState(
    "An unexpected error has occurred. Kindly, try again later."
  );
  const [serverError, setServerError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stAddress, setStAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleBool1 = () => {
    setBool1(!bool1);
  };

  const handleBool2 = () => {
    setBool2(!bool2);
  };

  const handleBedrooms = (bed, newPrice) => {
    setNoOfBedrooms(bed);
    setTotalPrice(totalPrice + newPrice);
  };

  const handleBathrooms = (bath, newPrice) => {
    setNoOfBathrooms(bath);
    setTotalPrice(totalPrice + newPrice);
  };

  const handleLivingrooms = (livingRooms, newPrice) => {
    setNoOfLivingrooms(livingRooms);
    setTotalPrice(totalPrice + newPrice);
  };

  const handleKitchens = (kitchens, newPrice) => {
    setNoOfKitchens(kitchens);
    setTotalPrice(totalPrice + newPrice);
  };

  const handleFirstName = (newName) => {
    setFirstName(newName);
  };

  const handleLastName = (newName) => {
    setLastName(newName);
  };

  const handleEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const handleStAddress = (newAddress) => {
    setStAddress(newAddress);
  };

  const handleCity = (newCity) => {
    setCity(newCity);
  };

  const handleState = (newState) => {
    setState(newState);
  };

  const handleZipCode = (newZipCode) => {
    setZipCode(newZipCode);
  };

  const handlePhoneNo = (newPhoneNo) => {
    setPhoneNo(newPhoneNo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerUID = uuidv4();
    const orderUID = uuidv4();

    try {
      try {
        await Axios.post(
          "http://Cleaning-service-app-env.eba-cmr24umq.us-east-1.elasticbeanstalk.com/addCustomer",
          {
            customerId: customerUID,
            firstName: firstName,
            lastName: lastName,
            email: email,
            streetAddress: stAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            phoneNo: phoneNo,
          }
        );
      } catch (e) {
        console.log(e, "Failed Add Customer");
      }

      try {
        await Axios.post(
          "http://Cleaning-service-app-env.eba-cmr24umq.us-east-1.elasticbeanstalk.com/addOrder",
          {
            orderId: orderUID,
            totalBedrooms: noOfBedrooms,
            totalBathrooms: noOfBathrooms,
            totalLivingrooms: noOfLivingrooms,
            totalKitchens: noOfKitchens,
            appointmentDate: dayjs(date),
            appointmentTime: dayjs(time).format("HH:MM:A"),
            totalPrice: totalPrice,
            customerId: customerUID,
          }
        );
      } catch (e) {
        console.log(e, "Failed add Order");
      }
    } catch (e) {
      setServerError(!serverError);
      setServerMessage(
        "Your order has been submitted successfully! A team member will be in touch with you soon."
      );
      console.log("Order success");
    }

    // setServerError(!serverError);
    //       setServerMessage(
    //         "Your order has been submitted successfully! A team member will be in touch with you soon."
    //       );
    //       console.log("Order success");

    setBool1(!bool1);
    //setBool2(!bool2);

    console.log("submit is clicked");
  };

  return (
    <div>
      {!bool1 && bool2 && (
        <CleaningInfo
          totalPrice={totalPrice}
          noOfBedrooms={noOfBedrooms}
          noOfBathrooms={noOfBathrooms}
          noOfLivingRooms={noOfLivingrooms}
          noOfKitchens={noOfKitchens}
          handleBedrooms={handleBedrooms}
          handleBathrooms={handleBathrooms}
          handleLivingrooms={handleLivingrooms}
          handleKitchens={handleKitchens}
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
          bool1={bool1}
          handleBool1={handleBool1}
        />
      )}
      {bool1 && bool2 && (
        <PersonalInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          stAddress={stAddress}
          city={city}
          state={state}
          zipCode={zipCode}
          phoneNo={phoneNo}
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleEmail={handleEmail}
          handleStAddress={handleStAddress}
          handleCity={handleCity}
          handleState={handleState}
          handleZipCode={handleZipCode}
          handlePhoneNo={handlePhoneNo}
          bool1={bool1}
          handleBool1={handleBool1}
          handleBool2={handleBool2}
        />
      )}

      {!bool2 && (
        <Review
          totalAmount={totalPrice}
          firstName={firstName}
          lastName={lastName}
          email={email}
          stAddress={stAddress}
          city={city}
          state={state}
          zipCode={zipCode}
          phoneNo={phoneNo}
          noOfBedrooms={noOfBedrooms}
          noOfBathrooms={noOfBathrooms}
          noOfLivingrooms={noOfLivingrooms}
          noOfKitchens={noOfKitchens}
          date={date}
          time={time}
          handleBool2={handleBool2}
          handleSubmit={handleSubmit}
        />
      )}

      {!bool1 && !bool2 && (
        <ConfirmationBox
          serverErrorBool={serverError}
          serverMessage={serverMessage}
        />
      )}
    </div>
  );
}

export default BookNow;
