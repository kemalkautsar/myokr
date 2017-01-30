-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 30, 2017 at 02:33 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `keyResult`
--

INSERT INTO `keyResult` (`key_id`, `obj_id`, `key_name`, `key_score`) VALUES
(1, '1', '33% Solved Ticket', 0),
(2, '1', 'Less than 24 hours response time during weekdays', 0);

-- --------------------------------------------------------

--
-- Table structure for table `objective`
--

CREATE TABLE `objective` (
  `obj_id` int(3) NOT NULL,
  `obj_name` varchar(160) NOT NULL,
  `obj_score` int(2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `objective`
--

INSERT INTO `objective` (`obj_id`, `obj_name`, `obj_score`) VALUES
(1, '5 Stars review for new themes released in 2017', 0);

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
  MODIFY `key_id` int(3) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `objective`
--
ALTER TABLE `objective`
  MODIFY `obj_id` int(3) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;