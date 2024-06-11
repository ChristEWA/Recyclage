-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 11, 2024 at 05:39 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recyclage_textile`
--

-- --------------------------------------------------------

--
-- Table structure for table `collectes`
--

DROP TABLE IF EXISTS `collectes`;
CREATE TABLE IF NOT EXISTS `collectes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `point_collecte` varchar(100) NOT NULL,
  `date_depot` date NOT NULL,
  `heure_depot` time NOT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Table structure for table `recuperation_vetements`
--

DROP TABLE IF EXISTS `recuperation_vetements`;
CREATE TABLE IF NOT EXISTS `recuperation_vetements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `commune` varchar(100) NOT NULL,
  `plage_horaire` varchar(50) NOT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `commune` varchar(100) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `password`, `age`, `commune`, `adresse`, `created_at`) VALUES
(20, 'ZOBIEU', 'Ewa ', 'christewa26@gmail.com', '$2b$10$4RPDsA3B7uhjRTMkqo2jS.Lxven9Btf.mBnBukPKVKLtPYQni0pLC', 25, 'Cocody ', 'Abobo', '2024-06-03 09:51:56'),
(21, 'KOFFI', 'Kablan', 'kablankoffi@gmail.com', '$2b$10$Oc.ookfOQqufL3Z4srpZQu2EVhF1QYAL4VTSnPcYoHHSMWFEOyE4e', 20, 'Yopougon', 'abobo', '2024-06-05 08:23:12'),
(6, 'GBE', 'Helena', 'gbekeagnon@gmail.com', 'XV78589612@_&', 48, 'Plateau', 'bergerville', '2024-05-31 01:11:15'),
(22, 'PASQUALI', 'Philippe', 'philippe.pasquali@gmail.com', '$2b$10$rfnCvkGsGQzpQKpG.dhTJOkt43z9ORCZiXS0tKR38hX.Tmu9ilrKO', 32, 'Abobo', 'cocody', '2024-06-05 10:11:07');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
