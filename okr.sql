-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 26, 2017 at 10:38 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `okrdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `keyResult`
--

CREATE TABLE `keyResult` (
  `key_id` int(3) NOT NULL,
  `obj_id` varchar(3) NOT NULL,
  `key_name` varchar(160) NOT NULL,
  `key_score` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `objective`
--

CREATE TABLE `objective` (
  `obj_id` int(3) NOT NULL,
  `obj_name` varchar(160) NOT NULL,
  `obj_score` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `keyResult`
--
ALTER TABLE `keyResult`
  ADD PRIMARY KEY (`key_id`);

--
-- Indexes for table `objective`
--
ALTER TABLE `objective`
  ADD PRIMARY KEY (`obj_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `keyResult`
--
ALTER TABLE `keyResult`
  MODIFY `key_id` int(3) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `objective`
--
ALTER TABLE `objective`
  MODIFY `obj_id` int(3) NOT NULL AUTO_INCREMENT;