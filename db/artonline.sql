-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 22, 2014 at 09:55 AM
-- Server version: 5.5.37
-- PHP Version: 5.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `tbl_addartist`
--

INSERT INTO `tbl_addartist` (`id`, `fname`, `location`, `mobileno`, `email`, `desc`) VALUES
(7, 'Chua Boon Kee', 'Singapore', 88556321, 'BoonKee@gmail.com', 'Boon Kee has experimented diverse themes using various forms of traditional materials from metal to'),
(10, 'Zheng Yuan Shi', 'China', 88556321, 'Zhengshi@gmail.com', 'The promising young artist has participated in numerous exhibitions within China.  He is also a rec'),
(11, 'Yen Phang', 'Singapore', 88556321, 'yen.phang@gmail.com', 'The promising young artist has participated in numerous exhibitions within China.  He is also a rec'),
(12, 'Koeh Sia Yong', 'Singapore', 88556321, 'koeh.yong@gmail.com', 'Koeh’s works are highly sought after by collectors which include the Singapore Art Museum, National'),
(13, 'Eng Siak Loy', 'Singapore', 88556321, 'Eng.Loy@gmail.com', 'Eng Siak Loy’s paintings inevitably evoke a sense of nostalgia as the need for an unchanging landsc'),
(14, 'Mark Luo', 'Singapore', 88556321, 'mark.luo@gmail.com', 'Mark Luo graduated from the Nanyang Academy of Fine Arts in Singapore in 1962, and worked as an Art');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_artwork`
--

CREATE TABLE IF NOT EXISTS `tbl_artwork` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `artist` int(12) NOT NULL,
  `title` varchar(99) NOT NULL,
  `type` varchar(99) NOT NULL,
  `size` int(99) NOT NULL,
  `name` varchar(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `tbl_artwork`
--

INSERT INTO `tbl_artwork` (`id`, `artist`, `title`, `type`, `size`, `name`) VALUES
(12, 7, 'undefined', 'Scultpture', 0, 'Boon.jpg'),
(13, 10, 'undefined', 'Paint', 0, 'Zheng.jpg'),
(14, 10, 'undefined', 'Paint', 0, 'Zheng1.jpg'),
(15, 11, 'Alien to Me Oil', 'On Canvas', 50, 'YENPHANG.jpg'),
(16, 11, 'Your Love is My Wallpaper', 'Oil On Canvas', 122, 'YENPHANG1.jpg'),
(17, 11, 'Your Strange Fruit', 'Oil On Canvas', 45, 'YENPHANG2.jpg'),
(18, 12, 'Chinatown', 'undefined', 100, 'Koeh.jpg'),
(19, 12, 'sunflower', 'undefined', 121, 'Koeh1.jpg'),
(20, 13, 'undefined', 'acrylic', 100, 'Eng.jpg'),
(21, 13, 'The tree', 'Acrylic', 100, 'Eng1.jpg'),
(22, 13, 'Unknown Islan', 'undefined', 0, 'Eng2.jpg'),
(23, 13, 'Gathering', 'Acrylic', 120, 'Eng3.jpg'),
(24, 14, 'The horse', 'Acrylic', 0, 'Mark.jpg'),
(25, 14, 'Swirl', 'undefined', 0, 'Mark1.jpg'),
(26, 14, 'Unknown', 'undefined', 0, 'Mark2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_collection`
--

CREATE TABLE IF NOT EXISTS `tbl_collection` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `name` varchar(99) NOT NULL,
  `title` varchar(99) NOT NULL,
  `artistname` varchar(99) NOT NULL,
  `type` varchar(99) NOT NULL,
  `size` int(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_collector`
--

CREATE TABLE IF NOT EXISTS `tbl_collector` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `location` varchar(99) NOT NULL,
  `mobileno` int(99) NOT NULL,
  `email` varchar(99) NOT NULL,
  `interest` varchar(99) NOT NULL,
  `name` varchar(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tbl_collector`
--

INSERT INTO `tbl_collector` (`id`, `location`, `mobileno`, `email`, `interest`, `name`) VALUES
(1, 'DKSFLJ', 323454, 'DSFDF', '', 'shivraj'),
(2, 'pune', 911, 'dfkjds', 'sfkldjfldsjfldsf', 'gaurav'),
(3, 'pune', 100, 'ashis', 'sdfkljdslfkj', 'Ashish'),
(4, 'Singapore', 2147483647, 'priyabaskar187@gmail.com', 'I like acrylic', 'Karthika'),
(5, 'Singapore', 2147483647, 'priyabaskar187@gmail.com', 'I like acrylic', 'Karthika'),
(6, 'Singapore', 2147483647, 'priyabaskar187@gmail.com', 'I like acrylic', 'Karthika'),
(7, 'Singapore', 2147483647, 'priyabaskar187@gmail.com', 'I like acrylic', 'Karthika');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(99) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES
(1, 'ashish', 'ashish.sharma@fountaintechies.com', '12345');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
