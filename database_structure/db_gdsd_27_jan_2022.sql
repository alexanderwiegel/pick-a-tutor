-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 27, 2022 at 03:15 PM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pick_a_tutor`
--
CREATE DATABASE IF NOT EXISTS `pick_a_tutor` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `pick_a_tutor`;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `description`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Java', 'Java programming language course', '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL),
(2, 'Python', 'Python programming language course', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL),
(3, 'C#', 'C# programming language course', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL),
(4, 'Deutsch A1', 'German language for beginners', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL),
(5, 'Deutsch A2', 'German language for beginners', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL),
(6, '2nd Level Java', 'Second Level Java Mate', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL),
(7, '3rd Level Advanced java', 'Third level Advanced Java', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL),
(8, '3rd Level Java', '3rd Level Java', '2022-01-15 13:01:04', '2022-01-15 13:01:04', NULL),
(9, '4th Level Java', '4th Level Java', '2022-01-15 13:20:48', '2022-01-15 13:20:48', NULL),
(10, '5th Level Java', '5th Level Java', '2022-01-15 14:54:51', '2022-01-15 14:54:51', NULL),
(11, '6th Level Java', '6th Level Java', '2022-01-15 16:21:51', '2022-01-15 16:21:51', NULL),
(12, 'CSS for All', 'CSS for All', '2022-01-25 10:49:22', '2022-01-25 10:49:22', NULL),
(13, 'NFTs 101', 'NFTs 101', '2022-01-25 10:52:40', '2022-01-25 10:52:40', NULL),
(14, 'Maths for beginners', 'Maths for beginners', '2022-01-26 14:01:47', '2022-01-26 14:01:47', NULL),
(15, 'Drawing for all', 'Drawing for all', '2022-01-26 14:25:24', '2022-01-26 14:25:24', NULL),
(16, 'Physics exam prep', 'Physics exam prep', '2022-01-26 14:26:49', '2022-01-26 14:26:49', NULL),
(17, 'Piano', 'Piano', '2022-01-26 14:28:26', '2022-01-26 14:28:26', NULL),
(18, 'Geography', 'Geography', '2022-01-26 14:30:13', '2022-01-26 14:30:13', NULL),
(19, 'SAT prep ', 'SAT prep ', '2022-01-26 14:31:23', '2022-01-26 14:31:23', NULL),
(20, 'Math', 'Math', '2022-01-26 14:59:57', '2022-01-26 14:59:57', NULL),
(21, 'Drawing 101', 'Drawing 101', '2022-01-26 15:08:13', '2022-01-26 15:08:13', NULL),
(22, 'Course with files', 'Course with files', '2022-01-26 15:11:44', '2022-01-26 15:11:44', NULL),
(23, 'Toefl', 'Toefl', '2022-01-27 03:49:51', '2022-01-27 03:49:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `course_additional_info`
--

DROP TABLE IF EXISTS `course_additional_info`;
CREATE TABLE IF NOT EXISTS `course_additional_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `courseId` int NOT NULL,
  `tutorId` int NOT NULL,
  `fileTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `filePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `approvalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `course_additional_info`
--

INSERT INTO `course_additional_info` (`id`, `courseId`, `tutorId`, `fileTitle`, `filePath`, `approvalStatus`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'CVFilee', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852', 'Approved', '2022-01-16 00:20:58', '2022-01-16 00:21:25', NULL),
(2, 8, 27, 'Test', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852', 'Approved', '2022-01-16 00:20:58', '2022-01-16 00:21:25', NULL),
(3, 18, 27, 'test.txt', '/storage/course_uploads/Course-27-1643209433350-6094103.txt', 'PendingApproval', '2022-01-26 15:03:53', '2022-01-27 03:42:10', '2022-01-27 03:42:10'),
(4, 22, 27, 'test3.txt', '/storage/course_uploads/Course-27-1643209904327-720162111.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 15:11:44', NULL),
(5, 22, 27, 'test1.txt', '/storage/course_uploads/Course-27-1643209904353-382038916.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 15:11:44', NULL),
(6, 22, 27, 'test2.txt', '/storage/course_uploads/Course-27-1643209904355-508864088.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 18:06:30', '2022-01-26 18:06:30'),
(7, 22, 27, 'test4.txt', '/storage/course_uploads/Course-27-1643209904355-508864088.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 18:08:54', '2022-01-26 18:08:54'),
(8, 22, 27, 'test7.txt', '/storage/course_uploads/Course-27-1643223696523-413387542.function stream() { [native code] }', 'PendingApproval', '2022-01-26 19:01:36', '2022-01-26 19:01:36', NULL),
(9, 22, 27, 'test5.txt', '/storage/course_uploads/Course-27-1643223696539-692929020.function stream() { [native code] }', 'PendingApproval', '2022-01-26 19:01:36', '2022-01-26 19:01:36', NULL),
(10, 22, 27, 'test6.txt', '/storage/course_uploads/Course-27-1643223696544-127252456.function stream() { [native code] }', 'PendingApproval', '2022-01-26 19:01:36', '2022-01-26 21:57:11', '2022-01-26 21:57:11'),
(11, 22, 27, 'test4.txt', '/storage/course_uploads/Course-27-1643223696549-158538189.function stream() { [native code] }', 'Approved', '2022-01-26 19:01:36', '2022-01-27 05:18:10', NULL),
(12, 15, 27, 'test1.txt', '/storage/course_uploads/Course-27-1643247626991-324740027.function stream() { [native code] }', 'PendingApproval', '2022-01-27 01:40:27', '2022-01-27 01:43:43', '2022-01-27 01:43:43'),
(13, 15, 27, 'test2.txt', '/storage/course_uploads/Course-27-1643247627024-571024863.function stream() { [native code] }', 'PendingApproval', '2022-01-27 01:40:27', '2022-01-27 01:40:38', '2022-01-27 01:40:38'),
(14, 15, 27, 'test3.txt', '/storage/course_uploads/Course-27-1643247627026-994809061.function stream() { [native code] }', 'PendingApproval', '2022-01-27 01:40:27', '2022-01-27 01:40:27', NULL),
(15, 18, 27, 'test3.txt', '/storage/course_uploads/Course-27-1643254920036-478636752.function stream() { [native code] }', 'Approved', '2022-01-27 03:42:00', '2022-01-27 05:18:12', NULL),
(16, 18, 27, 'test4.txt', '/storage/course_uploads/Course-27-1643254920039-386708963.function stream() { [native code] }', 'PendingApproval', '2022-01-27 03:42:00', '2022-01-27 03:42:00', NULL),
(17, 18, 27, 'test5.txt', '/storage/course_uploads/Course-27-1643254920062-558826279.function stream() { [native code] }', 'Approved', '2022-01-27 03:42:00', '2022-01-27 05:18:13', NULL),
(18, 23, 27, 'toefl.txt', '/storage/course_uploads/Course-27-1643255391575-554256722.function stream() { [native code] }', 'PendingApproval', '2022-01-27 03:49:51', '2022-01-27 03:49:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `senderId` int NOT NULL,
  `recipientId` int NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `senderId` (`senderId`) USING BTREE,
  KEY `recipientId` (`recipientId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `senderId`, `recipientId`, `message`, `isRead`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(6, 1, 2, 'Hey Kyler! This is John Doe.', 1, '2022-01-24 22:17:09', '2022-01-24 22:17:21', NULL),
(7, 2, 1, 'Hey John!', 1, '2022-01-24 22:17:47', '2022-01-24 22:18:21', NULL),
(8, 2, 1, 'What\'s up?', 1, '2022-01-24 22:18:06', '2022-01-24 22:18:21', NULL),
(9, 1, 2, 'Just wanted to say \"Hello\".', 1, '2022-01-24 22:23:43', '2022-01-24 22:24:42', NULL),
(10, 1, 2, 'Right now, I can\'t think of anything else.', 1, '2022-01-24 22:24:10', '2022-01-24 22:24:42', NULL),
(11, 13, 1, 'Hello Mr. Doe,\nI would like to join your course. How do I apply for it?', 1, '2022-01-25 11:53:29', '2022-01-26 07:53:06', NULL),
(12, 13, 1, 'Please reply', 1, '2022-01-26 16:17:28', '2022-01-26 18:31:36', NULL),
(13, 1, 13, 'What\'s up?', 0, '2022-01-26 18:31:47', '2022-01-26 18:31:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentId` int NOT NULL,
  `tutorId` int NOT NULL,
  `courseId` int NOT NULL,
  `rating` tinyint NOT NULL,
  `ratingComments` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `reportReview` tinyint DEFAULT NULL,
  `reportReviewComments` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `reporterId` int DEFAULT NULL,
  `reportReviewStatus` tinyint DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `studentId` (`studentId`) USING BTREE,
  KEY `tutorId` (`tutorId`) USING BTREE,
  KEY `courseId` (`courseId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `studentId`, `tutorId`, `courseId`, `rating`, `ratingComments`, `reportReview`, `reportReviewComments`, `reporterId`, `reportReviewStatus`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 3, 1, 1, 1, 'Spank me daddy', 1, 'Tutor has no kids', 1, 1, '2021-12-04 00:00:00', '2022-01-26 14:57:35', '2022-01-26 14:57:35'),
(2, 3, 17, 1, 5, 'Ben is awesome!', 1, 'That\'s not true!', 1, 0, '2021-12-04 00:00:00', '2022-01-26 15:54:12', '2022-01-26 15:54:12'),
(3, 3, 17, 1, 5, 'Ben is awesome too!', 0, 'That\'s not true!', 1, NULL, '2021-12-04 00:00:00', '2022-01-26 16:23:06', NULL),
(4, 3, 17, 1, 5, 'Ben is awesome with ID4!', 0, 'That\'s not true!', 1, NULL, '2021-12-04 00:00:00', '2022-01-26 16:24:56', NULL),
(9, 3, 2, 4, 5, 'The teacher is awesome!', NULL, '', NULL, NULL, '2022-01-16 10:47:34', '2022-01-16 10:47:34', NULL),
(10, 3, 2, 4, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:16', '2022-01-16 10:49:16', NULL),
(11, 3, 2, 5, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:43', '2022-01-16 10:49:43', NULL),
(17, 3, 2, 2, 5, 'The teacher is awesome!', NULL, '', 3, NULL, '2022-01-19 15:03:38', '2022-01-19 15:03:38', NULL),
(19, 2, 1, 2, 1, 'basic', 1, '', 3, NULL, '2022-01-25 04:36:22', '2022-01-27 01:16:31', NULL),
(20, 2, 1, 2, 4, 'Very good introduction.', NULL, '', 1, NULL, '2022-01-25 04:41:02', '2022-01-25 04:41:02', NULL),
(21, 2, 1, 2, 5, 'Awesome course', NULL, '', 1, NULL, '2022-01-25 04:42:16', '2022-01-25 04:42:16', NULL),
(22, 2, 1, 1, 5, 'Makes Java easy again', 1, '', 28, NULL, '2022-01-25 04:43:24', '2022-01-27 00:30:01', NULL),
(23, 1, 17, 1, 5, 'Good', NULL, '', 1, NULL, '2022-01-25 17:31:32', '2022-01-25 17:31:32', NULL),
(24, 15, 23, 8, 4, 'The teacher is very cute!', NULL, '', 15, NULL, '2022-01-25 20:15:35', '2022-01-25 20:15:35', NULL),
(25, 3, 20, 6, 5, 'very good course', NULL, '', 3, NULL, '2022-01-27 00:41:04', '2022-01-27 00:41:04', NULL),
(26, 3, 20, 6, 1, 'I can\'t recommend it this course', NULL, '', 3, NULL, '2022-01-27 00:46:58', '2022-01-27 00:46:58', NULL),
(27, 3, 20, 6, 5, 'I recommend this course', NULL, '', 3, NULL, '2022-01-27 00:49:57', '2022-01-27 00:49:57', NULL),
(28, 3, 21, 4, 5, 'I recommend it', NULL, '', 3, NULL, '2022-01-27 00:50:35', '2022-01-27 00:50:35', NULL),
(29, 3, 18, 2, 1, 'not practical enough', 0, '', 3, NULL, '2022-01-27 01:14:03', '2022-01-27 05:18:24', NULL),
(30, 3, 18, 2, 1, 'Shit course, shit teacher', 1, '', 3, NULL, '2022-01-27 01:20:40', '2022-01-27 05:18:36', '2022-01-27 05:18:36'),
(32, 3, 2, 3, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:11:51', '2022-01-27 08:11:51', NULL),
(33, 3, 2, 3, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:12:37', '2022-01-27 08:12:37', NULL),
(34, 3, 2, 18, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:17:09', '2022-01-27 08:17:09', NULL),
(35, 3, 18, 2, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:18:30', '2022-01-27 08:18:30', NULL),
(36, 3, 18, 2, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:19:08', '2022-01-27 08:19:08', NULL),
(37, 3, 18, 2, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:20:25', '2022-01-27 08:20:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_enrolled_courses`
--

DROP TABLE IF EXISTS `student_enrolled_courses`;
CREATE TABLE IF NOT EXISTS `student_enrolled_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tutorCourseId` int NOT NULL,
  `userId` int NOT NULL,
  `enrolledStatus` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `tutorCourseId` (`tutorCourseId`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `student_enrolled_courses`
--

INSERT INTO `student_enrolled_courses` (`id`, `tutorCourseId`, `userId`, `enrolledStatus`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, 1, 0, '2022-01-16 14:10:57', '2022-01-16 14:10:57', NULL),
(2, 3, 1, 0, '2022-01-16 14:11:00', '2022-01-16 14:11:00', NULL),
(3, 1, 1, 0, '2022-01-16 14:11:05', '2022-01-16 14:11:05', NULL),
(4, 4, 1, 0, '2022-01-16 14:11:07', '2022-01-16 14:11:07', NULL),
(5, 4, 3, 0, '2022-01-16 15:11:50', '2022-01-16 15:11:50', NULL),
(6, 8, 13, 0, '2022-01-25 11:53:59', '2022-01-25 11:53:59', NULL),
(7, 2, 13, 0, '2022-01-25 23:06:00', '2022-01-25 23:06:00', NULL),
(8, 1, 13, 0, '2022-01-25 23:06:27', '2022-01-25 23:06:27', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tutor_courses`
--

DROP TABLE IF EXISTS `tutor_courses`;
CREATE TABLE IF NOT EXISTS `tutor_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `CourseId` int NOT NULL,
  `coursePricePerHour` decimal(4,2) DEFAULT NULL,
  `rating` decimal(4,2) DEFAULT '0.00',
  `isFull` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `nRatings` int DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `tutor_courses_CourseId_UserId_unique` (`UserId`,`CourseId`) USING BTREE,
  KEY `CourseId` (`CourseId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tutor_courses`
--

INSERT INTO `tutor_courses` (`id`, `UserId`, `CourseId`, `coursePricePerHour`, `rating`, `isFull`, `createdAt`, `updatedAt`, `deletedAt`, `nRatings`) VALUES
(1, 17, 1, '14.99', '5.00', 0, '2022-01-15 12:48:13', '2022-01-27 10:39:35', NULL, 4),
(2, 18, 2, '5.00', '3.50', 0, '2022-01-15 12:48:13', '2022-01-27 10:39:35', NULL, 8),
(3, 19, 3, '10.99', '4.00', 0, '2022-01-15 12:48:13', '2022-01-27 10:39:35', NULL, 2),
(4, 21, 4, '8.00', '5.00', 0, '2022-01-15 12:48:13', '2022-01-27 10:39:35', NULL, 3),
(5, 21, 5, '14.50', '1.00', 1, '2022-01-15 12:48:13', '2022-01-17 21:13:37', '2022-01-17 21:13:37', 0),
(6, 23, 8, '13.50', '3.67', 0, '2022-01-15 13:01:04', '2022-01-27 10:39:35', NULL, 3),
(8, 27, 10, '12.50', '4.00', 0, '2022-01-15 14:54:51', '2022-01-27 10:39:35', NULL, 1),
(10, 20, 6, '15.50', '0.00', 0, '2022-01-16 11:24:27', '2022-01-27 10:39:35', NULL, 0),
(12, 24, 12, '15.50', '0.00', 0, '2022-01-25 10:49:22', '2022-01-27 10:39:35', NULL, 0),
(13, 1, 13, '15.50', '0.00', 0, '2022-01-25 10:52:40', '2022-01-27 10:39:35', NULL, 0),
(14, 27, 14, '10.00', '0.00', 0, '2022-01-26 14:01:47', '2022-01-27 10:39:35', NULL, 0),
(15, 27, 15, '15.00', '0.00', 0, '2022-01-26 14:25:24', '2022-01-27 10:39:35', NULL, 0),
(16, 27, 16, NULL, '0.00', 0, '2022-01-26 14:26:49', '2022-01-27 10:39:35', NULL, 0),
(17, 27, 17, NULL, '0.00', 0, '2022-01-26 14:28:26', '2022-01-27 10:39:35', NULL, 0),
(18, 27, 18, '40.00', '4.00', 0, '2022-01-26 14:30:13', '2022-01-27 10:39:35', NULL, 1),
(19, 27, 19, NULL, '0.00', 0, '2022-01-26 14:31:23', '2022-01-27 10:39:35', NULL, 0),
(20, 27, 20, NULL, '0.00', 0, '2022-01-26 14:59:57', '2022-01-27 10:39:35', NULL, 0),
(21, 27, 21, NULL, '0.00', 0, '2022-01-26 15:08:13', '2022-01-27 10:39:35', NULL, 0),
(22, 27, 22, '10.00', '0.00', 1, '2022-01-26 15:11:44', '2022-01-27 10:39:35', NULL, 0),
(23, 27, 23, NULL, '0.00', 0, '2022-01-27 03:49:51', '2022-01-27 10:39:35', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rating` decimal(4,2) NOT NULL DEFAULT '0.00',
  `dateOfBirth` date DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `isStudent` tinyint(1) DEFAULT NULL,
  `isTutor` tinyint(1) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `nRatings` int DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `rating`, `dateOfBirth`, `gender`, `isStudent`, `isTutor`, `isAdmin`, `status`, `description`, `createdAt`, `updatedAt`, `deletedAt`, `nRatings`) VALUES
(1, 'John', 'Doe', 'johndoe@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1985-05-08', 2, 1, 1, 1, 0, NULL, '2022-01-15 12:48:12', '2022-01-27 14:50:53', NULL, 0),
(2, 'Kyler', 'Stark', 'kylerstark@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1990-02-18', 1, 0, 1, 0, 0, NULL, '2022-01-15 12:48:12', '2022-01-27 10:34:53', NULL, 0),
(3, 'Johnny', 'Doh', 'johnnyd@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 2, 1, 0, 0, 0, NULL, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL, 0),
(8, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$tLRCbmqr.5tXBJNhAoHbNe0Zvcpj7t.7S6f.vCW.4bIN3ymjPA00O', '0.00', '1995-08-05', 1, 1, 0, 0, 0, NULL, '2022-01-18 18:51:55', '2022-01-18 18:56:24', '2022-01-18 18:56:24', 0),
(9, 'Johnny', 'Doh', 'yes41@example.com', '$2a$10$EqOBN6uwtqEPnog9GzL1jug2DxPILxZ5Kqf7H3kJN9zgmNl9Hvkpy', '0.00', '1995-08-05', 1, 1, 0, 0, 0, NULL, '2022-01-18 18:52:47', '2022-01-18 18:52:47', NULL, 0),
(10, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$GIR7kH.k9OMTFmZ0Pl8PieoveuAmjENRBXz50jtzNMoTvqP0RLMZ2', '0.00', '1995-08-05', 1, 1, 0, 0, 0, NULL, '2022-01-19 15:03:17', '2022-01-19 15:03:17', NULL, 0),
(11, 'Alexander', 'Wiegel', 'alexander.wiegel@hs-fulda.de', '$2a$10$3Yv.WxW9SGFuUzbdWCrHLueNU.cMxxvm28gWIbmMWy9yHovlNbNFW', '0.00', '1998-08-08', 0, 1, 0, 0, 0, NULL, '2022-01-23 13:16:18', '2022-01-26 15:46:39', '2022-01-26 15:46:39', 0),
(12, 'Student', 'User', 'student@hs-fulda.de', '$2a$10$h28SLQbHsKwEg6Y4FUx5auE5rkHn0MjE7AWDGtUqLQJZ9iIEn7Sz6', '0.00', '2000-01-19', 0, 1, 0, 0, 0, NULL, '2022-01-24 02:37:29', '2022-01-26 08:12:58', '2022-01-26 08:12:58', 0),
(13, 'Chahat', 'Soni', 'chahat.soni@informatik.hs-fulda.de', '$2a$10$l4vV3D2jMj2YdaNJEiMNk.PejeE/dA2Lxh3rbStdvBnjEPfVCRpO.', '0.00', '2000-01-01', 0, 1, 0, 0, 0, NULL, '2022-01-25 10:49:26', '2022-01-25 10:49:26', NULL, 0),
(14, 'Chahat', 'Soni', 'c.s@hs-fulda.de', '$2a$10$dbSESz6HkifOmW2m6YoZ1O.VKeSsyTVxQSOU8ZKmpxq8bX.72BtEy', '0.00', '2222-01-01', 0, 1, 0, 0, 0, NULL, '2022-01-25 11:01:27', '2022-01-25 11:01:27', NULL, 0),
(15, 'Chahat', 'Soni', 'deegoldy@informatik.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '2000-02-01', 0, 1, 0, 0, 0, NULL, '2022-01-25 11:04:44', '2022-01-25 11:04:44', NULL, 0),
(16, 'Helfried', 'Scholz', 'Helfried.Scholz@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 16:53:57', '2022-01-27 10:34:53', NULL, 0),
(17, 'Ben', 'Ludwig', 'ben.ludwig@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '5.00', '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:39:35', NULL, 4),
(18, 'Paul', 'Schumacher', 'paul.schumacher@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '3.50', '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:39:35', NULL, 8),
(19, 'Luca', 'Böhm', 'luca.böhm@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '4.00', '1995-08-05', 2, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:39:35', NULL, 2),
(20, 'Noah', 'Jäger', 'noah.jäger@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0),
(21, 'Finn', 'Kraus', 'finn.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '5.00', '1995-08-05', 2, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:39:35', NULL, 3),
(22, 'Elias', 'Kraus', 'elias.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 3, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0),
(23, 'Finn', 'Stein', 'finn.stein@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '4.50', '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-26 08:12:38', '2022-01-26 08:12:38', 0),
(24, 'Elias', 'Kraus', 'elias.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 2, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0),
(25, 'Luis', 'Kraus', 'luis.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 1, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0),
(26, 'Ben', 'Winter', 'ben.winter@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '0.00', '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0),
(27, 'Tutor', 'User', 'tutor_user@hs-fulda.de', '$2a$10$aq9iw2hd1wXtmsRnxOsNNunerbpLAnqoMDBh9z97rPuWKmZRmhTEa', '0.00', '1990-01-01', 1, 0, 1, 0, 0, NULL, '2022-01-26 09:44:45', '2022-01-27 10:39:35', NULL, 2),
(28, 'Ziad', 'Khaled', 'zk@hs-fulda.de', '$2a$10$IRi/nffRSY/EtbQQm9b9EuoK2GVD.g22/DJghZUxyhQmmzgxgObre', '0.00', '2001-10-02', 0, 0, 1, 0, 0, NULL, '2022-01-26 20:57:48', '2022-01-27 10:34:53', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
CREATE TABLE IF NOT EXISTS `user_profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `profileType` tinyint(1) DEFAULT NULL,
  `isApproved` tinyint(1) NOT NULL DEFAULT '0',
  `profileImagePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cvPath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `UserId` (`UserId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `UserId`, `profileType`, `isApproved`, `profileImagePath`, `cvPath`, `description`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, NULL, 1, 'profile_image_1639734254.jpg', 'my_cv_1639734264.pdf', 'I am eight years of experience in Teaching', '2022-01-15 12:48:13', '2022-01-27 14:49:58', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_profile_files`
--

DROP TABLE IF EXISTS `user_profile_files`;
CREATE TABLE IF NOT EXISTS `user_profile_files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `fileTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `filePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `approvalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `user_profile_files`
--

INSERT INTO `user_profile_files` (`id`, `userId`, `fileTitle`, `filePath`, `approvalStatus`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Resume', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642291432050-448836138', 'Approved', '2022-01-16 00:03:52', '2022-01-16 00:05:18', NULL),
(2, 2, 'CV', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642292563197-680390435', 'Approved', '2022-01-16 00:22:43', '2022-01-26 12:42:57', NULL),
(3, 2, 'TestfilePDF', '/storage/profile_uploads/User-2-1643131326250-914361478.pdf', 'Approved', '2022-01-25 17:22:06', '2022-01-26 13:03:11', NULL),
(7, 27, 'Randmon', '/storage/profile_uploads/User-27-1643237734809-352546538.txt', 'PendingApproval', '2022-01-26 22:55:34', '2022-01-26 22:57:53', '2022-01-26 22:57:53'),
(8, 27, 'test6.txt', '/storage/profile_uploads/User-27-1643238000618-605400662.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:00', NULL),
(9, 27, 'test7.txt', '/storage/profile_uploads/User-27-1643238000623-4654215.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:50', '2022-01-26 23:00:50'),
(10, 27, 'test2.txt', '/storage/profile_uploads/User-27-1643238000625-863682049.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:00', NULL),
(11, 27, 'test5.txt', '/storage/profile_uploads/User-27-1643238000621-974842933.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-27 03:31:01', '2022-01-27 03:31:01'),
(12, 27, 'test4.txt', '/storage/profile_uploads/User-27-1643238000627-450848423.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:00', NULL),
(13, 27, 'test1.txt', '/storage/profile_uploads/User-27-1643238000647-891614591.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:00', NULL),
(14, 27, 'test3.txt', '/storage/profile_uploads/User-27-1643238000711-492129912.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:00', NULL),
(15, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643289800197-683886101.txt', 'PendingApproval', '2022-01-27 13:23:20', '2022-01-27 13:36:56', '2022-01-27 13:36:56'),
(16, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643290626833-318950108.txt', 'PendingApproval', '2022-01-27 13:37:06', '2022-01-27 14:03:11', '2022-01-27 14:03:11'),
(17, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643292204119-141324357.txt', 'PendingApproval', '2022-01-27 14:03:24', '2022-01-27 14:11:51', '2022-01-27 14:11:51'),
(18, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643292771240-912118345.txt', 'PendingApproval', '2022-01-27 14:12:51', '2022-01-27 14:48:55', '2022-01-27 14:48:55'),
(19, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643294947647-798237794.txt', 'PendingApproval', '2022-01-27 14:49:07', '2022-01-27 14:49:58', '2022-01-27 14:49:58'),
(20, 27, 'NewFile.txt', '/storage/profile_uploads/User-27-1643295262334-676204899.txt', 'PendingApproval', '2022-01-27 14:54:22', '2022-01-27 14:54:22', NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipientId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`tutorId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`courseId`) REFERENCES `tutor_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_enrolled_courses`
--
ALTER TABLE `student_enrolled_courses`
  ADD CONSTRAINT `student_enrolled_courses_ibfk_1` FOREIGN KEY (`tutorCourseId`) REFERENCES `tutor_courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `student_enrolled_courses_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `tutor_courses`
--
ALTER TABLE `tutor_courses`
  ADD CONSTRAINT `tutor_courses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tutor_courses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
