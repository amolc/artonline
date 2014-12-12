-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 11, 2014 at 11:16 AM
-- Server version: 5.5.40
-- PHP Version: 5.3.10-1ubuntu3.15

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `icefire`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_user`
--

CREATE TABLE IF NOT EXISTS `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin_user`
--

INSERT INTO `admin_user` (`id`, `name`, `password`, `email`) VALUES
(1, 'admin', '12345', 'shahzad@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_type` varchar(250) NOT NULL,
  `phone_number` varchar(30) NOT NULL,
  `phone_number_x` varchar(255) NOT NULL,
  `email` varchar(70) NOT NULL,
  `email_x` varchar(255) NOT NULL,
  `web_link_title` varchar(250) NOT NULL,
  `web_link` varchar(70) NOT NULL,
  `web_link_x` varchar(255) NOT NULL,
  `housing_ass_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL DEFAULT 'NA',
  `contact_name_x` varchar(255) NOT NULL,
  `type` int(2) NOT NULL DEFAULT '0',
  `ordering` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `contact_type`, `phone_number`, `phone_number_x`, `email`, `email_x`, `web_link_title`, `web_link`, `web_link_x`, `housing_ass_id`, `contact_name`, `contact_name_x`, `type`, `ordering`) VALUES
(17, 'Car Wahser sdsd', '878', '', 'asasas@asdsdsd.com', '', '', '', '', 665, 'asdasdasdasd', '', 0, 0),
(18, 'Truck Driver', 'sdad', '', 'jggvgjdjsdfds@sdfsdfsdf.com', '', '', '', '', 665, 'gjgjg', '', 1, 0),
(22, 'one', '909080', '', 'ooo@oo.com', '', '', 'http://sddsd.com', '', 665, 'ooo', '', 1, 0),
(23, 'stre contat', '09808', '', 'asdasd@sdsdsd.com', '', '', 'http://sdsds.in', '', 665, 'asdadasd', '', 0, 0),
(24, 'stre test', '909099', '', 'aadadad@sdsd.com', '', '', '', '', 665, 'sdsdsd', '', 0, 0),
(28, 'aksfdhasd sadshad', 'asddssad', '', 'jasdhjhd@sdsdsd.com', '', '', '', '', 665, 'jhg jhsgdjhgsd', '', 1, 0),
(29, 'test', '9080800', 'sdsd sd sd', 'asas@asas.com', 'sdsdsds s d sd sd', '', 'http://sdsdsd.com', 'xxsdsdsd sd sd', 683, 'ssdsd', 'hbbm', 1, 0),
(30, 'asdsdsds', 'h', 'v', 'hgv@sdsdsd.com', 'hv', '', 'http://sdsdssd.com', 'vh', 683, 'asas', 'hv', 1, 1),
(31, 'jhg', 'g', 'jhg', 'asasaas@asas.com', 'gjh', 'fd', 'http://sdsds.com', 'j', 683, 'jasdsdsdsdsd', 'ghj', 1, 2),
(32, 'nghjg', 'nv', 'n', 'vn@sdsd.com', 'v', 'vn sd s dsd', 'http://sdsdsdds.com', 'aqsasasasasasn', 683, 'vn', 'vn', 0, 1),
(33, 'Nalwale', 'kg', 'kg', 'hgkj@aqssas.com', 'gh', 'k', 'http://asasas.com', 'j', 683, 'Nalwalevv', 'vj', 0, 0),
(34, 't', 't', 't', 'tss@assas.com', 't', 't', '', 't', 683, 'tt', 'tt', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_board_contact`
--

CREATE TABLE IF NOT EXISTS `tbl_board_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `housing_ass_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email1` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email2` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email3` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email4` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email5` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email6` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email7` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email8` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email9` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `web_link` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `contact_description` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `tbl_board_contact`
--

INSERT INTO `tbl_board_contact` (`id`, `housing_ass_id`, `name`, `phone_number`, `email`, `email1`, `email2`, `email3`, `email4`, `email5`, `email6`, `email7`, `email8`, `email9`, `web_link`, `contact_description`) VALUES
(5, 665, NULL, NULL, 'amol@pl.cibddf', '', '', '', '', '', '', '', '', '', NULL, 'asasas sd sd sd s ds d sds d s d sd'),
(9, 669, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL),
(10, 670, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL),
(11, 671, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL),
(17, 677, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL),
(22, 45, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL),
(23, 683, NULL, NULL, 'sef@fma.com', 'asd@df.cm', 'sds@dsa.vc', '', 'amolv@amol.com', '', '', '', '', '', NULL, NULL),
(24, 697, NULL, NULL, 'ds@ds.gf', 'sd@tr.gf', 'ty@gf.fd', 'qw@fe.gh', 'awde@rg.gf', 'gnkd@kwe.gf', 'werl@nfd.gr', 'nkwelk@wke.gf', 'ekrj@er.gf', 'flls@jwke.gf', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_board_contact_old`
--

CREATE TABLE IF NOT EXISTS `tbl_board_contact_old` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `housing_ass_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `web_link` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `contact_description` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `tbl_board_contact_old`
--

INSERT INTO `tbl_board_contact_old` (`id`, `housing_ass_id`, `name`, `phone_number`, `email`, `web_link`, `contact_description`) VALUES
(5, 665, NULL, NULL, 'amol@pl.cibddf', NULL, 'asasas sd sd sd s ds d sds d s d sd'),
(9, 669, NULL, NULL, NULL, NULL, NULL),
(10, 670, NULL, NULL, NULL, NULL, NULL),
(11, 671, NULL, NULL, NULL, NULL, NULL),
(17, 677, NULL, NULL, NULL, NULL, NULL),
(22, 45, NULL, NULL, NULL, NULL, NULL),
(23, 683, NULL, NULL, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category_description`
--

CREATE TABLE IF NOT EXISTS `tbl_category_description` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `housing_ass_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `time` int(30) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `tbl_category_description`
--

INSERT INTO `tbl_category_description` (`id`, `type_id`, `housing_ass_id`, `title`, `description`, `time`, `date`) VALUES
(2, 4, 683, 'asasas', 'sdsdsd', 1417789994, '2014-12-05'),
(3, 1, 683, 'asadsds', 'adsdsd', 1417790199, '2014-12-05'),
(4, 1, 683, 'asas', 'adsdsd', 1417790282, '2014-12-05'),
(5, 4, 683, 'asaasas', 'sdsdsd', 1417790332, '2014-12-05'),
(6, 1, 683, 'assdsd', 'sdsdsdsd', 1417790357, '2014-12-05'),
(8, 4, 683, 'sdsdsd', 'sdsdsdsd', 1417930756, '2014-12-07'),
(9, 2, 683, 'asdsadsd', 'sdsdsd', 1417930888, '2014-12-07'),
(11, 5, 683, 'asdsadsdsdsdsdsd', 'sdsdsdsdsdsd', 1417930909, '2014-12-07'),
(12, 2, 683, 'eight', 'sdsdsdsdsdsd', 1417930920, '2014-12-07'),
(14, 2, 683, 'asdsdsd', 'asdsdsd', 1417931178, '2014-12-07'),
(15, 2, 683, 'sdsd', 'sdsdsd', 1417931199, '2014-12-07'),
(16, 2, 683, 'qwqwqwq', 'aaqqwqw', 1418213779, '2014-12-10'),
(17, 1, 683, 'test one', 'sdsdsd', 1418213796, '2014-12-10'),
(18, 1, 683, 'sdsdsdsd', 'dsdsdsd', 1418214894, '2014-12-10'),
(19, 4, 683, 'test by Swap', 'sdsdsd', 1418214913, '2014-12-10');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact_detail`
--

CREATE TABLE IF NOT EXISTS `tbl_contact_detail` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(60) NOT NULL,
  `contact_name` varchar(20) NOT NULL,
  `role` varchar(255) CHARACTER SET swe7 NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address1` varchar(20) NOT NULL,
  `address2` varchar(255) CHARACTER SET swe7 NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `tbl_contact_detail`
--

INSERT INTO `tbl_contact_detail` (`contact_id`, `password`, `contact_name`, `role`, `phone_no`, `email`, `address1`, `address2`) VALUES
(1, '21232f297a57a5a743894a0e4a801fc3', 'association board', 'manaeger', '03347268737', 'shahzad@gmail.com', 'shahzad.fortsolution', 'add 23 7878'),
(6, '', 'boss', '', '03347268737', 'shahzad@gmail', 'all about other', ''),
(7, 'req.body.password', 'req.body.contact_nam', '', '', 'req.body.email', 'req.body.email', 'req.body.email'),
(8, 'req.body.password', 'req.body.contact_nam', '', '', 'req.body.email', 'req.body.email', 'req.body.email'),
(9, 'req.body.password', '', '', '', 'req.body.email', '', ''),
(10, 'req.body.password', '', '', '', 'req.body.email', '', ''),
(11, 'req.body.password', '', '', '', 'req.body.email', '', ''),
(12, 'req.body.password', '', '', '', 'req.body.email', '', ''),
(13, 'admin', '', '', '', 'amol@amol.com', '', ''),
(14, 'admin', '', '', '', 'amole@amol.com', '', ''),
(15, '9090', '', '', '', 'amolvhankalas@gmail.', '', ''),
(16, '123', '', '', '', 'amol@maol.com', '', ''),
(17, '9090', 'Mr. Iya', '', '', 'amol@tell.com', '', ''),
(18, '89', 'jg', '', '', 'amol@amiworks.com', '', ''),
(19, '90', 'hk', '', '', '90@90.in', '', ''),
(20, '90', 'jg', '', '', '90@90.ik', '', ''),
(21, 'gk', 'gk', '', '', 'kk@kk.in', '', ''),
(22, 'vnbv', 'nbv', '', '', 'sasd@asas.in', '', ''),
(23, 'jhgjh', 'Amol', 'manareger', '090909090', 'jg@sadsd.in', 'line', 'line 2'),
(24, '909', 'Mr. Amana Oo', 'Manegege', '90966', 'a@a.in', 'add1', 'add3'),
(25, '9090', 'bmnbmb', '', '', 'user1@user1.com', '', ''),
(26, '9090', '89hb', '', '', 'a@a.com', '', ''),
(27, '12345', 'Amol', '', '', 'user2@user2.com', '', ''),
(28, '123', 'Mr Kio', '', '', 'user2@user3.com', '', ''),
(29, '123', 'hkjh', '', '', 'b@b.in', '', ''),
(30, '123', 'jhg', 'aasasas', '', 'c@c.in', '', 'asasas'),
(31, '12345', 'gkgkg', '', '', 'user3@user3.com', '', ''),
(32, 'hgf', 'hgf', '', '', 'user4@user4.com', '', ''),
(33, '12345', 'kh', '', '', 'user5@user5.com', '', ''),
(34, 'jh', 'g', '', '', 'jhg@asas.com', '', ''),
(35, 'jh', 'g', '', '', 'jhg@ascas.com', '', ''),
(36, 'j', 'j', '', '', 'jg@asas.com', '', ''),
(37, 'qwqwqwqw', 'lh', '', '', 'qaqw@qwqw.com', '', ''),
(38, 'qwqwqwqw', 'lh', '', '', 'qaqw@qwqws.com', '', ''),
(39, 'asasasasasasas', 'g', '', '', 'jhasasa@asas.com', '', ''),
(40, '909', 'jgj', '', '', 'd@d.in', '', ''),
(41, '909', 'gj', '', '', 'amolvhankalas@gmail.com', '', ''),
(42, '', 'hf', '', '', 'hgf@asasa.com', '', ''),
(43, '0sw3tyb9', 'Amol', 'Mane', '', 'amolv+5@fountaintechies.com', '', ''),
(44, '16hwipb9', 'MAMAMA', 'asasas', '', 'amolvhankalas+2@gmail.com', '', ''),
(45, '123', 'Mr. Amol', 'manaegere', '', 'amol@amol.in', '', ''),
(46, '123', 'sdsdsdsdsd', '9', '', 'amolv@fountaintechies.com', 'Pune', ''),
(47, '12345', 'Amol V', 'Manegege', '', 'amol99@fountaintechies.com', '', ''),
(48, '57idaemi', 'g', 'jg', '', 'jsdsd@asas.com', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_housing_admin`
--

CREATE TABLE IF NOT EXISTS `tbl_housing_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `housing_ass_id` int(11) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_housing_association`
--

CREATE TABLE IF NOT EXISTS `tbl_housing_association` (
  `housing_ass_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_id` int(11) NOT NULL,
  `housing_ass_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `apartment_count` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `address` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `county` int(11) DEFAULT NULL,
  `municipality` varchar(255) DEFAULT NULL,
  `building_password` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT 'BoApp123',
  `telephone_no` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `org_number` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  PRIMARY KEY (`housing_ass_id`),
  KEY `m_id` (`m_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=684 ;

--
-- Dumping data for table `tbl_housing_association`
--

INSERT INTO `tbl_housing_association` (`housing_ass_id`, `contact_id`, `housing_ass_name`, `apartment_count`, `m_id`, `address`, `zipcode`, `county`, `municipality`, `building_password`, `telephone_no`, `description`, `org_number`, `logo`) VALUES
(45, 45, 'Dark Green APt', 90, 1, 'Ad 1', 'Add2', 1, NULL, 'BoApp123', '09090909', NULL, '909', ''),
(658, 23, 'Sana Aprt', 90, 63, 'hgjhg', 'ghj', 8, NULL, 'qwqwqw', 'jhgjh', NULL, '2323', ''),
(665, 30, 'mhghb', 0, 48, 'hgjhg', 'jhg', 6, NULL, NULL, '', 'sdsdsdsdsdsdsd sd sd sd s ds d sd', '', 'chain-snatcher.jpg'),
(669, 34, 'jgyjgj', 0, 48, 'jg', 'j', 3, NULL, NULL, '', NULL, '', ''),
(670, 35, 'jgyjgj', 0, 48, 'jg', 'j', 3, NULL, NULL, '', NULL, '', ''),
(671, 36, 'jhghjgjhg', 0, 48, 'gh', 'jg', 6, NULL, NULL, '', NULL, '', ''),
(677, 42, 'hgfhg', 0, 31, 'fhg', 'gf', 3, NULL, NULL, 'h', NULL, 'fhg', ''),
(683, 46, 'Samasaaara', 4, 1, 'gj', 'sdsd', 1, NULL, 'BoApp123', 'sd098098', 'asas sd s ds d s d sd sdsdsdsdas as  ad asd asd', 'gjgjgj', 'Kore-Kara-Logo-2.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_municipality`
--

CREATE TABLE IF NOT EXISTS `tbl_municipality` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `m_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`m_id`),
  KEY `state_id` (`state_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=275 ;

--
-- Dumping data for table `tbl_municipality`
--

INSERT INTO `tbl_municipality` (`m_id`, `m_name`, `state_id`) VALUES
(1, 'Karlshamns kommun', 1),
(2, 'Karlskrona kommun', 1),
(3, 'Olofströms kommun', 1),
(4, 'Ronneby kommun', 1),
(5, 'Sölvesborgs kommun', 1),
(6, 'Älvdalens kommun', 2),
(7, 'Avesta kommun', 2),
(8, 'Borlänge kommun', 2),
(9, 'Gagnefs kommun', 2),
(10, 'Hedemora kommun', 2),
(11, 'Leksands kommun', 2),
(12, 'Ludvika kommun', 2),
(13, 'Malung-Sälens kommun', 2),
(14, 'Mora kommun', 2),
(15, 'Orsa kommun', 2),
(16, 'Rättviks kommun', 2),
(17, 'Säters kommun', 2),
(18, 'Smedjebackens kommun', 2),
(19, 'Vansbro kommun', 2),
(20, 'Bollnäs kommun', 3),
(21, 'Gävle kommun', 3),
(22, 'Hofors kommun', 3),
(23, 'Hudiksvalls kommun', 3),
(24, 'Ljusdals kommun', 3),
(25, 'Nordanstigs kommun', 3),
(26, 'Ockelbo kommun', 3),
(27, 'Ovanåkers kommun', 3),
(28, 'Sandvikens kommun', 3),
(29, 'Söderhamns kommun', 3),
(30, 'Gotlands kommun', 4),
(31, 'Falkenbergs kommun', 5),
(32, 'Halmstads kommun', 5),
(33, 'Kungsbacka kommun', 5),
(34, 'Laholms kommun', 5),
(35, 'Varbergs kommun', 5),
(36, 'Åre kommun', 6),
(37, 'Bergs kommun', 6),
(38, 'Bräcke kommun', 6),
(39, 'Härjedalens kommun', 6),
(40, 'Krokoms kommun', 6),
(41, 'Östersunds kommun', 6),
(42, 'Strömsunds kommun', 6),
(43, 'Aneby kommun', 7),
(44, 'Eksjö kommun', 7),
(45, 'Gislaveds kommun', 7),
(46, 'Gnosjö kommun', 7),
(47, 'Habo kommun', 7),
(48, 'Jönköpings kommun', 7),
(49, 'Mullsjö kommun', 7),
(50, 'Nässjö kommun', 7),
(51, 'Sävsjö kommun', 7),
(52, 'Tranås kommun', 7),
(53, 'Vaggeryds kommun', 7),
(54, 'Värnamo kommun', 7),
(55, 'Vetlanda kommun', 7),
(56, 'Borgholms kommun', 8),
(57, 'Emmaboda kommun', 8),
(58, 'Hultsfreds kommun', 8),
(59, 'Mönsterås kommun', 8),
(60, 'Mörbylånga kommun', 8),
(61, 'Nybro kommun', 8),
(62, 'Oskarshamns kommun', 8),
(63, 'Torsås kommun', 8),
(64, 'Västerviks kommun', 8),
(65, 'Vimmerby kommun', 8),
(66, 'Älmhults kommun', 9),
(67, 'Alvesta kommun', 9),
(68, 'Lessebo kommun', 9),
(69, 'Ljungby kommun', 9),
(70, 'Markaryds kommun', 9),
(71, 'Tingsryds kommun', 9),
(72, 'Uppvidinge kommun', 9),
(73, 'Växjö kommun', 9),
(74, 'Älvsbyns kommun', 10),
(75, 'Arjeplogs kommun', 10),
(76, 'Arvidsjaurs kommun', 10),
(77, 'Bodens kommun', 10),
(78, 'Gällivare kommun', 10),
(79, 'Kiruna kommun', 10),
(80, 'Luleå kommun', 10),
(81, 'Överkalix kommun', 10),
(82, 'Övertorneå kommun', 10),
(83, 'Pajala kommun', 10),
(84, 'Piteå kommun', 10),
(85, 'Askersunds kommun', 20),
(86, 'Degerfors kommun', 20),
(87, 'Hällefors kommun', 20),
(88, 'Hallsbergs kommun', 20),
(89, 'Karlskoga kommun', 20),
(90, 'Kumla kommun', 20),
(91, 'Laxå kommun', 20),
(92, 'Lekebergs kommun', 20),
(93, 'Lindesbergs kommun', 20),
(94, 'Ljusnarsbergs kommun', 20),
(95, 'Nora kommun', 20),
(96, 'Örebro kommun', 20),
(97, 'Åtvidabergs kommun', 21),
(98, 'Boxholms kommun', 21),
(99, 'Finspångs kommun', 21),
(100, 'Kinda kommun', 21),
(101, 'Linköpings kommun', 21),
(102, 'Mjölby kommun', 21),
(103, 'Motala kommun', 21),
(104, 'Norrköpings kommun', 21),
(105, 'Ödeshögs kommun', 21),
(106, 'Söderköpings kommun', 21),
(107, 'Vadstena kommun', 21),
(108, 'Valdemarsviks kommun', 21),
(109, 'Ydre kommun', 21),
(110, 'Ängelholms kommun', 11),
(111, 'Åstorps kommun', 11),
(112, 'Båstads kommun', 11),
(113, 'Bjuvs kommun', 11),
(114, 'Bromölla kommun', 11),
(115, 'Burlövs kommun', 11),
(116, 'Eslövs kommun', 11),
(117, 'Hässleholms kommun', 11),
(118, 'Höganäs kommun', 11),
(119, 'Höörs kommun', 11),
(120, 'Hörby kommun', 11),
(121, 'Kävlinge kommun', 11),
(122, 'Klippans kommun', 11),
(123, 'Kristianstads kommun', 11),
(124, 'Lomma kommun', 11),
(125, 'Lunds kommun', 11),
(126, 'Malmö kommun', 11),
(127, 'Örkelljunga kommun', 11),
(128, 'Osby kommun', 11),
(129, 'Östra Göinge kommun', 11),
(130, 'Perstorps kommun', 11),
(131, 'Simrishamns kommun', 11),
(132, 'Sjöbo kommun', 11),
(133, 'Skurups kommun', 11),
(134, 'Staffanstorps kommun', 11),
(135, 'Svalövs kommun', 11),
(136, 'Svedala kommun', 11),
(137, 'Tomelilla kommun', 11),
(138, 'Trelleborgs kommun', 11),
(139, 'Vellinge kommun', 11),
(140, 'Ystads kommun', 11),
(141, 'Eskilstuna kommun', 12),
(142, 'Flens kommun', 12),
(143, 'Gnesta kommun', 12),
(144, 'Katrineholms kommun', 12),
(145, 'Nyköpings kommun', 12),
(146, 'Oxelösunds kommun', 12),
(147, 'Strängnäs kommun', 12),
(148, 'Trosa kommun', 12),
(149, 'Vingåkers kommun', 12),
(150, 'Botkyrka kommun', 13),
(151, 'Danderyds kommun', 13),
(152, 'Ekerö kommun', 13),
(153, 'Haninge kommun', 13),
(154, 'Huddinge kommun', 13),
(155, 'Järfälla kommun', 13),
(156, 'Nacka kommun', 13),
(157, 'Norrtälje kommun', 13),
(158, 'Nykvarns kommun', 13),
(159, 'Nynäshamns kommun', 13),
(160, 'Österåkers kommun', 13),
(161, 'Salems kommun', 13),
(162, 'Sigtuna kommun', 13),
(163, 'Södertälje kommun', 13),
(164, 'Sollentuna kommun', 13),
(165, 'Solna kommun', 13),
(166, 'Stockholms kommun', 13),
(167, 'Sundbybergs kommun', 13),
(168, 'Täby kommun', 13),
(169, 'Tyresö kommun', 13),
(170, 'Upplands Väsby kommun', 13),
(171, 'Upplands-Bro kommun', 13),
(172, 'Vallentuna kommun', 13),
(173, 'Värmdö kommun', 13),
(174, 'Vaxholms kommun', 13),
(175, 'Älvkarleby kommun', 14),
(176, 'Enköpings kommun', 14),
(177, 'Håbo kommun', 14),
(178, 'Heby kommun', 14),
(179, 'Knivsta kommun', 14),
(180, 'Östhammars kommun', 14),
(181, 'Tierps kommun', 14),
(182, 'Uppsala kommun', 14),
(183, 'Årjängs kommun', 15),
(184, 'Arvika kommun', 15),
(185, 'Eda kommun', 15),
(186, 'Filipstads kommun', 15),
(187, 'Forshaga kommun', 15),
(188, 'Hagfors kommun', 15),
(189, 'Hammarö kommun', 15),
(190, 'Kils kommun', 15),
(191, 'Kristinehamns kommun', 15),
(192, 'Munkfors kommun', 15),
(193, 'Säffle kommun', 15),
(194, 'Storfors kommun', 15),
(195, 'Sunne kommun', 15),
(196, 'Torsby kommun', 15),
(197, 'Åsele kommun', 16),
(198, 'Bjurholms kommun', 16),
(199, 'Dorotea kommun', 16),
(200, 'Lycksele kommun', 16),
(201, 'Malå kommun', 16),
(202, 'Nordmalings kommun', 16),
(203, 'Norsjö kommun', 16),
(204, 'Robertsfors kommun', 16),
(205, 'Skellefteå kommun', 16),
(206, 'Sorsele kommun', 16),
(207, 'Storumans kommun', 16),
(208, 'Umeå kommun', 16),
(209, 'Vännäs kommun', 16),
(210, 'Vilhelmina kommun', 16),
(211, 'Vindelns kommun', 16),
(212, 'Ånge kommun', 17),
(213, 'Härnösands kommun', 17),
(214, 'Kramfors kommun', 17),
(215, 'Örnsköldsviks kommun', 17),
(216, 'Sollefteå kommun', 17),
(217, 'Sundsvalls kommun', 17),
(218, 'Timrå kommun', 17),
(219, 'Arboga kommun', 18),
(220, 'Fagersta kommun', 18),
(221, 'Hallstahammars kommun', 18),
(222, 'Köpings kommun', 18),
(223, 'Kungsörs kommun', 18),
(224, 'Norbergs kommun', 18),
(225, 'Sala kommun', 18),
(226, 'Skinnskattebergs kommun', 18),
(227, 'Surahammars kommun', 18),
(228, 'Västerås kommun', 18),
(229, 'Ale kommun', 19),
(230, 'Alingsås kommun', 19),
(231, 'Åmåls kommun', 19),
(232, 'Bengtsfors kommun', 19),
(233, 'Bollebygds kommun', 19),
(234, 'Borås kommun', 19),
(235, 'Dals-Eds kommun', 19),
(236, 'Essunga kommun', 19),
(237, 'Falköpings kommun', 19),
(238, 'Färgelanda kommun', 19),
(239, 'Götene kommun', 19),
(240, 'Gullspångs kommun', 19),
(241, 'Härryda kommun', 19),
(242, 'Hjo kommun', 19),
(243, 'Karlsborgs kommun', 19),
(244, 'Kungälvs kommun', 19),
(245, 'Lerums kommun', 19),
(246, 'Lidköpings kommun', 19),
(247, 'Lilla Edets kommun', 19),
(248, 'Lysekils kommun', 19),
(249, 'Mariestads kommun', 19),
(250, 'Marks kommun', 19),
(251, 'Melleruds kommun', 19),
(252, 'Mölndals kommun', 19),
(253, 'Munkedals kommun', 19),
(254, 'Öckerö kommun', 19),
(255, 'Orusts kommun', 19),
(256, 'Partille kommun', 19),
(257, 'Skara kommun', 19),
(258, 'Skövde kommun', 19),
(259, 'Sotenäs kommun', 19),
(260, 'Stenungsunds kommun', 19),
(261, 'Strömstads kommun', 19),
(262, 'Svenljunga kommun', 19),
(263, 'Tanums kommun', 19),
(264, 'Tibro kommun', 19),
(265, 'Tidaholms kommun', 19),
(266, 'Tjörns kommun', 19),
(267, 'Töreboda kommun', 19),
(268, 'Tranemo kommun', 19),
(269, 'Trollhättans kommun', 19),
(270, 'Uddevalla kommun', 19),
(271, 'Ulricehamns kommun', 19),
(272, 'Vänersborgs kommun', 19),
(273, 'Vara kommun', 19),
(274, 'Vårgårda kommun', 19);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE IF NOT EXISTS `tbl_news` (
  `n_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`n_id`, `category`, `title`, `description`) VALUES
(1, 1, 'News1 ', 'description'),
(2, 2, 'News 2', 'description');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_newscat`
--

CREATE TABLE IF NOT EXISTS `tbl_newscat` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(20) NOT NULL,
  `image` varchar(250) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_newscat`
--

INSERT INTO `tbl_newscat` (`type_id`, `cat_name`, `image`) VALUES
(1, 'Viktigt meddelande', 'img/news_feed_icon_4.svg'),
(2, 'Allmän information', 'img/news_feed_icon_2.svg'),
(4, 'Firande/högtid', 'img/news_feed_icon_3.svg'),
(5, 'Annät', 'img/news_feed_icon_1.svg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_notification`
--

CREATE TABLE IF NOT EXISTS `tbl_notification` (
  `device` varchar(255) NOT NULL,
  `token_id` varchar(250) NOT NULL,
  `housing_ass_id` int(11) NOT NULL,
  PRIMARY KEY (`token_id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_option`
--

CREATE TABLE IF NOT EXISTS `tbl_option` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `key` varchar(20) NOT NULL,
  `value` int(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=50 ;

--
-- Dumping data for table `tbl_option`
--

INSERT INTO `tbl_option` (`id`, `key`, `value`) VALUES
(47, 'flat_rate', 10),
(48, 'minimum_payment', 500),
(49, 'tax_rate', 89);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE IF NOT EXISTS `tbl_orders` (
  `orderID` int(12) NOT NULL AUTO_INCREMENT,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `amount` int(12) NOT NULL,
  `housingID` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  `paypal_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`orderID`, `start_date`, `end_date`, `amount`, `housingID`, `status`, `paypal_id`) VALUES
(1, '2014-11-04 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(2, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(3, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(4, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(5, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(6, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(7, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(8, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(9, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(10, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(11, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(12, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(13, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(14, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(15, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(16, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(17, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(18, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(19, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(20, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(21, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(22, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(23, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(24, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(25, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(26, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(27, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(28, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(29, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(30, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(31, '2014-11-21 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(32, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(33, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(34, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(35, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(36, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-9YR446463Y907562FKSCQLYI'),
(37, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-6YF6767896760694NKSCU46A'),
(38, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-9YN55465NJ534943CKSCVD7Y'),
(39, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(40, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-55R11587CL974505AKSCVMSY'),
(41, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-1XU42644JW092630KKSCVN2A'),
(42, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(43, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-14476151JE3027620KSCVQPY'),
(44, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-5AH34530P33354947KSCVUEA'),
(45, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(46, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-6W240738TY689850SKSD43YI'),
(47, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'failed', NULL),
(48, '0000-00-00 00:00:00', '2014-11-28 00:00:00', 10, 683, 'success', 'PAY-0WD65623B1504552DKSEGB7Q');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payments`
--

CREATE TABLE IF NOT EXISTS `tbl_payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `housing_ass_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE IF NOT EXISTS `tbl_services` (
  `services_id` int(11) NOT NULL AUTO_INCREMENT,
  `Service_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Email` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone_number` varchar(40) NOT NULL,
  `web_address` varchar(250) NOT NULL,
  PRIMARY KEY (`services_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tbl_services`
--

INSERT INTO `tbl_services` (`services_id`, `Service_name`, `Email`, `phone_number`, `web_address`) VALUES
(1, 'sweeper', 'sw@gmail.com', '03347268737', 'w.com'),
(5, 'manger', 'man@gmail.com', '0322115', 'www.m.com'),
(7, 'Janitor', 'janitor@new.com', '03347268737', 'http://www.gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_state`
--

CREATE TABLE IF NOT EXISTS `tbl_state` (
  `state_id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `state_location` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `tbl_state`
--

INSERT INTO `tbl_state` (`state_id`, `state_name`, `state_location`) VALUES
(1, 'Blekinge län', 'sweden'),
(2, 'Dalarnas län', 'sweden'),
(3, 'Gävleborgs län', 'sweden'),
(4, 'Gotlands län', 'sweden'),
(5, 'Hallands län', 'sweden'),
(6, 'Jämtlands län', 'sweden'),
(7, 'Jönköpings län', 'sweden'),
(8, 'Kalmar län', 'sweden'),
(9, 'Kronobergs län', 'sweden'),
(10, 'Norrbottens län', 'sweden'),
(11, 'Skåne län', 'sweden'),
(12, 'Södermanlands län', 'sweden'),
(13, 'Stockholms län', 'sweden'),
(14, 'Uppsala län', 'sweden'),
(15, 'Värmlands län', 'sweden'),
(16, 'Västerbottens län', 'sweden'),
(17, 'Västernorrlands län', 'sweden'),
(18, 'Västmanlands län', 'sweden'),
(19, 'Västra Götalands län', 'sweden'),
(20, 'Örebro län', 'sweden'),
(21, 'Östergötlands län', 'sweden');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_submited_input`
--

CREATE TABLE IF NOT EXISTS `tbl_submited_input` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(20) DEFAULT NULL,
  `type_of_input` varchar(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `housing_ass_id` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `housing_ass_id` (`housing_ass_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subscriptions`
--

CREATE TABLE IF NOT EXISTS `tbl_subscriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `tbl_subscriptions`
--

INSERT INTO `tbl_subscriptions` (`id`, `email`) VALUES
(16, 'sdsddsd@sss.com'),
(17, 'sdsddsd@sss.com'),
(18, 'sdsddsd@sss.com');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`housing_ass_id`) REFERENCES `tbl_housing_association` (`housing_ass_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_board_contact_old`
--
ALTER TABLE `tbl_board_contact_old`
  ADD CONSTRAINT `tbl_board_contact_old_ibfk_1` FOREIGN KEY (`housing_ass_id`) REFERENCES `tbl_housing_association` (`housing_ass_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_category_description`
--
ALTER TABLE `tbl_category_description`
  ADD CONSTRAINT `tbl_category_description_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `tbl_newscat` (`type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_category_description_ibfk_2` FOREIGN KEY (`housing_ass_id`) REFERENCES `tbl_housing_association` (`housing_ass_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_housing_admin`
--
ALTER TABLE `tbl_housing_admin`
  ADD CONSTRAINT `tbl_housing_admin_ibfk_1` FOREIGN KEY (`housing_ass_id`) REFERENCES `tbl_housing_association` (`housing_ass_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_housing_association`
--
ALTER TABLE `tbl_housing_association`
  ADD CONSTRAINT `tbl_housing_association_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `tbl_municipality` (`m_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_municipality`
--
ALTER TABLE `tbl_municipality`
  ADD CONSTRAINT `tbl_municipality_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `tbl_state` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_notification`
--
ALTER TABLE `tbl_notification`
  ADD CONSTRAINT `tbl_notification_ibfk_1` FOREIGN KEY (`housing_ass_id`) REFERENCES `tbl_housing_association` (`housing_ass_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_submited_input`
--
ALTER TABLE `tbl_submited_input`
  ADD CONSTRAINT `tbl_submited_input_ibfk_1` FOREIGN KEY (`housing_ass_id`) REFERENCES `tbl_housing_association` (`housing_ass_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
