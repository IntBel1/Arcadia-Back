-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2024 at 08:41 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arcadia`
--

-- --------------------------------------------------------

--
-- Table structure for table `animal`
--

CREATE TABLE `animal` (
  `animal_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `lifeStyle` varchar(255) DEFAULT NULL,
  `habitat` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `habitat_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE `avis` (
  `avis_id` int(11) NOT NULL,
  `pseudo` varchar(50) DEFAULT NULL,
  `commentaire` varchar(50) DEFAULT NULL,
  `isVisible` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `habitat`
--

CREATE TABLE `habitat` (
  `habitat_id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `appear` varchar(255) DEFAULT NULL,
  `lifeStyle` varchar(255) DEFAULT NULL,
  `warn` varchar(255) DEFAULT NULL,
  `preserve` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `race`
--

CREATE TABLE `race` (
  `race_id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rapport_veterinaire`
--

CREATE TABLE `rapport_veterinaire` (
  `rapport_veterinaire_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `detail` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `label` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `label`) VALUES
(1, 'admin'),
(2, 'employee'),
(3, 'veterinaire');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `description` varchar(255) DEFAULT NULL,
  `service_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`description`, `service_id`, `title`, `image`) VALUES
('The guide service offers informative tours led by knowledgeable guides, enhancing the visitor experience with insights into the animals and their habitats.', 1, 'Guide Service', 'guide.jpg'),
('The zoo train offers a fun and convenient way to explore the zoo, providing easy access to various exhibits and attractions.', 2, 'Zoo Train', 'ade39a62-3f09-42e1-9f81-d8c9ba07bfa9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`username`, `password`, `nom`, `prenom`, `email`, `role_id`) VALUES
(' Int.Bel', '$2a$10$Hlf6Y/UKP05YAP4xAghFYuGnoOQU/XMviPzRJM3SGEEKxTdZJG0Sm', 'belhadj', 'Intissar', 'intbel@gmail.com', 1),
('hamzaargoubi', '$2a$10$NQiOgPPNItqZKsL69B.x0e.xn0s4n/h9.LLcdeg5Xz5', 'argoubi', 'hamza', 'hamzaargoubi@hotmail.com', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`animal_id`),
  ADD KEY `fk_habitat` (`habitat_id`);

--
-- Indexes for table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`avis_id`);

--
-- Indexes for table `habitat`
--
ALTER TABLE `habitat`
  ADD PRIMARY KEY (`habitat_id`);

--
-- Indexes for table `race`
--
ALTER TABLE `race`
  ADD PRIMARY KEY (`race_id`);

--
-- Indexes for table `rapport_veterinaire`
--
ALTER TABLE `rapport_veterinaire`
  ADD PRIMARY KEY (`rapport_veterinaire_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`username`),
  ADD KEY `fk_user_role` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animal`
--
ALTER TABLE `animal`
  MODIFY `animal_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `avis`
--
ALTER TABLE `avis`
  MODIFY `avis_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `habitat`
--
ALTER TABLE `habitat`
  MODIFY `habitat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `race`
--
ALTER TABLE `race`
  MODIFY `race_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rapport_veterinaire`
--
ALTER TABLE `rapport_veterinaire`
  MODIFY `rapport_veterinaire_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `FK_animal_habitat` FOREIGN KEY (`animal_id`) REFERENCES `habitat` (`habitat_id`),
  ADD CONSTRAINT `FK_animal_race` FOREIGN KEY (`animal_id`) REFERENCES `race` (`race_id`),
  ADD CONSTRAINT `fk_habitat` FOREIGN KEY (`habitat_id`) REFERENCES `habitat` (`habitat_id`);

--
-- Constraints for table `rapport_veterinaire`
--
ALTER TABLE `rapport_veterinaire`
  ADD CONSTRAINT `FK_rapport_veterinaire_animal` FOREIGN KEY (`rapport_veterinaire_id`) REFERENCES `animal` (`animal_id`);

--
-- Constraints for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
