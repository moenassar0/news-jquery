-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2022 at 07:37 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `urlToImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `author`, `title`, `description`, `date`, `urlToImage`) VALUES
(1, 'Efe Udin', 'Tesla recalls nearly 1.1 million electric cars in the U.S', 'According to the National Highway Traffic Safety Administration, Tesla recalled nearly 1.1 million U.S. electric cars.', '2022-09-23', 'https://www.gizchina.com/wp-content/uploads/images/2022/09/Tesla-1200x799.jpeg'),
(2, 'DIGITIMES', 'Tesla crushing competition on EV charger costs', 'The cost of setting up an electric-car charging station can vary greatly, according to our latest Commercial EV Charger Price Survey that looks at how hardware and installation costs are shaping up. The 7-22 kilowatt AC chargers - which are found at locat', '2022-09-23', 'https://img.digitimes.com/newsshow/20220923vl204_files/2_2b.jpg'),
(3, 'IANS', 'Twitter hunts for connection between whistleblower Peiter Zatko, Elon Musk', 'After being hammered by whistleblower allegations, Twitter is now seeking if there is a connection between its former head of security, Peiter \'Mudge\' Zatko and Tesla CEO Elon Musk', '2022-09-22', 'https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/26/full/1650922666-9947.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `carousels`
--

CREATE TABLE `carousels` (
  `id` int(11) NOT NULL,
  `urlToImage` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carousels`
--

INSERT INTO `carousels` (`id`, `urlToImage`, `description`, `title`) VALUES
(1, 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x230,f_auto,q_auto:best/rockcms/2022-09/220922-donald-trump-mjf-1544-99e118.jpg\r\n', 'Special master in Mar-a-Lago case asks Trump to back up his allegation that FBI \'planted\' evidence', 'DONALD TRUMP'),
(2, 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2022-09/220922-john-fetterman-mjf-1613-b3fc25.jpg', 'Democrats are running focus groups on Fetterman\'s health', '2022 Election');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carousels`
--
ALTER TABLE `carousels`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `carousels`
--
ALTER TABLE `carousels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
