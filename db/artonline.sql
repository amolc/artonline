-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 12, 2014 at 01:29 PM
-- Server version: 5.5.20
-- PHP Version: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `artonline`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_addartist`
--

CREATE TABLE IF NOT EXISTS `tbl_addartist` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `fname` varchar(99) NOT NULL,
  `location` varchar(99) NOT NULL,
  `mobileno` int(99) NOT NULL,
  `email` varchar(99) NOT NULL,
  `desc` varchar(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_addartist`
--

INSERT INTO `tbl_addartist` (`id`, `fname`, `location`, `mobileno`, `email`, `desc`) VALUES
(1, 'espn', 'admin', 0, '', ''),
(2, 'espn', 'admin', 12, 'admin', '32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_artwork`
--

CREATE TABLE IF NOT EXISTS `tbl_artwork` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `title` varchar(99) NOT NULL,
  `type` varchar(99) NOT NULL,
  `size` int(99) NOT NULL,
  `name` varchar(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tbl_artwork`
--

INSERT INTO `tbl_artwork` (`id`, `title`, `type`, `size`, `name`) VALUES
(1, 'asdfdsfsd', '', 0, 'ankush'),
(2, 'asdfdsfsd', '', 0, 'amol'),
(3, 'asd', 'sa', 34, ''),
(4, 'monolisa', 'potrait', 12, ''),
(5, 'GG', 'landscape', 23, ''),
(6, 'GG', 'landscape', 23, ''),
(7, 'lp', 'lp', 34, ''),
(8, 'lp', 'lp', 34, 'ashish');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES
(1, 'ashish', 'ashish.sharma@founta', '12345');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
