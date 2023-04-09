import React from "react";
import { useState } from "react";
import CleaningInfo from "./CleaningInfo";
import PersonalInfo from "./PersonalInfo";
import Review from "./Review";
import dayjs from "dayjs";
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
        />
      )}
    </div>
  );
}

export default BookNow;
