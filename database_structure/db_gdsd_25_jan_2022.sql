-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 20.113.56.213    Database: db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course_additional_info`
--

DROP TABLE IF EXISTS `course_additional_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_additional_info` (
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_additional_info`
--

LOCK TABLES `course_additional_info` WRITE;
/*!40000 ALTER TABLE `course_additional_info` DISABLE KEYS */;
INSERT INTO `course_additional_info` VALUES (1,1,1,'CVFilee','C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852','Approved','2022-01-16 00:20:58','2022-01-16 00:21:25',NULL);
/*!40000 ALTER TABLE `course_additional_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Java','Java programming language course','2022-01-15 12:48:12','2022-01-15 12:48:12',NULL),(2,'Python','Python programming language course','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(3,'C#','C# programming language course','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(4,'Deutsch A1','German language for beginners','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(5,'Deutsch A2','German language for beginners','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(6,'2nd Level Java','Second Level Java Mate','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(7,'3rd Level Advanced java','Third level Advanced Java','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(8,'3rd Level Java','3rd Level Java','2022-01-15 13:01:04','2022-01-15 13:01:04',NULL),(9,'4th Level Java','4th Level Java','2022-01-15 13:20:48','2022-01-15 13:20:48',NULL),(10,'5th Level Java','5th Level Java','2022-01-15 14:54:51','2022-01-15 14:54:51',NULL),(11,'6th Level Java','6th Level Java','2022-01-15 16:21:51','2022-01-15 16:21:51',NULL),(12,'CSS for All','CSS for All','2022-01-25 10:49:22','2022-01-25 10:49:22',NULL),(13,'NFTs 101','NFTs 101','2022-01-25 10:52:40','2022-01-25 10:52:40',NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `senderId` int NOT NULL,
  `recipientId` int NOT NULL,
  `message` varchar(255) NOT NULL,
  `isRead` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `senderId` (`senderId`),
  KEY `recipientId` (`recipientId`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipientId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (6,1,2,'Hey Kyler! This is John Doe.',1,'2022-01-24 22:17:09','2022-01-24 22:17:21',NULL),(7,2,1,'Hey John!',1,'2022-01-24 22:17:47','2022-01-24 22:18:21',NULL),(8,2,1,'What\'s up?',1,'2022-01-24 22:18:06','2022-01-24 22:18:21',NULL),(9,1,2,'Just wanted to say \"Hello\".',1,'2022-01-24 22:23:43','2022-01-24 22:24:42',NULL),(10,1,2,'Right now, I can\'t think of anything else.',1,'2022-01-24 22:24:10','2022-01-24 22:24:42',NULL),(11,13,1,'Hello Mr. Doe,\nI would like to join your course. How do I apply for it?',0,'2022-01-25 11:53:29','2022-01-25 11:53:29',NULL);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
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
  KEY `courseId` (`courseId`) USING BTREE,
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`tutorId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`courseId`) REFERENCES `tutor_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,3,1,1,1,'Spank me daddy',1,'Tutor has no kids',2,1,'2021-12-04 00:00:00','2022-01-16 13:36:58',NULL),(2,1,1,1,3,'Great course!',NULL,NULL,NULL,1,'2021-12-04 00:00:00','2022-01-15 13:01:13',NULL),(3,1,1,1,5,NULL,NULL,NULL,NULL,1,'2021-12-04 00:00:00','2022-01-15 13:01:13',NULL),(4,1,2,1,8,NULL,NULL,NULL,NULL,1,'2021-12-04 00:00:00','2022-01-15 13:01:13',NULL),(5,1,2,1,1,NULL,NULL,NULL,NULL,1,'2021-12-04 00:00:00','2022-01-15 13:01:13',NULL),(6,3,2,4,5,'The teacher is amazing',NULL,'',NULL,NULL,'2022-01-15 16:37:33','2022-01-15 16:37:33',NULL),(9,3,2,4,5,'The teacher is awesome!',NULL,'',NULL,NULL,'2022-01-16 10:47:34','2022-01-16 10:47:34',NULL),(10,3,2,4,5,'The teacher is awesome!!',NULL,'',NULL,NULL,'2022-01-16 10:49:16','2022-01-16 10:49:16',NULL),(11,3,2,5,5,'The teacher is awesome!!',NULL,'',NULL,NULL,'2022-01-16 10:49:43','2022-01-16 10:49:43',NULL),(17,3,2,2,5,'The teacher is awesome!',NULL,'',3,NULL,'2022-01-19 15:03:38','2022-01-19 15:03:38',NULL),(18,1,2,1,5,'Very good course, I totally recommend it!',NULL,'',1,NULL,'2022-01-25 03:39:16','2022-01-25 03:39:16',NULL),(19,2,1,2,1,'basic',NULL,'',1,NULL,'2022-01-25 04:36:22','2022-01-25 04:36:22',NULL),(20,2,1,2,4,'Very good introduction.',NULL,'',1,NULL,'2022-01-25 04:41:02','2022-01-25 04:41:02',NULL),(21,2,1,2,5,'Awesome course',NULL,'',1,NULL,'2022-01-25 04:42:16','2022-01-25 04:42:16',NULL),(22,2,1,1,5,'Makes Java easy again',NULL,'',1,NULL,'2022-01-25 04:43:24','2022-01-25 04:43:24',NULL);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_enrolled_courses`
--

DROP TABLE IF EXISTS `student_enrolled_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_enrolled_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tutorCourseId` int NOT NULL,
  `userId` int NOT NULL,
  `enrolledStatus` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `tutorCourseId` (`tutorCourseId`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE,
  CONSTRAINT `student_enrolled_courses_ibfk_1` FOREIGN KEY (`tutorCourseId`) REFERENCES `tutor_courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `student_enrolled_courses_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_enrolled_courses`
--

LOCK TABLES `student_enrolled_courses` WRITE;
/*!40000 ALTER TABLE `student_enrolled_courses` DISABLE KEYS */;
INSERT INTO `student_enrolled_courses` VALUES (1,2,1,0,'2022-01-16 14:10:57','2022-01-16 14:10:57',NULL),(2,3,1,0,'2022-01-16 14:11:00','2022-01-16 14:11:00',NULL),(3,1,1,0,'2022-01-16 14:11:05','2022-01-16 14:11:05',NULL),(4,4,1,0,'2022-01-16 14:11:07','2022-01-16 14:11:07',NULL),(5,4,3,0,'2022-01-16 15:11:50','2022-01-16 15:11:50',NULL),(6,8,13,0,'2022-01-25 11:53:59','2022-01-25 11:53:59',NULL);
/*!40000 ALTER TABLE `student_enrolled_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutor_courses`
--

DROP TABLE IF EXISTS `tutor_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutor_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `CourseId` int NOT NULL,
  `coursePricePerHour` decimal(4,2) DEFAULT NULL,
  `rating` decimal(4,2) DEFAULT '0.00',
  `isFull` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `tutor_courses_CourseId_UserId_unique` (`UserId`,`CourseId`) USING BTREE,
  KEY `CourseId` (`CourseId`) USING BTREE,
  CONSTRAINT `tutor_courses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tutor_courses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor_courses`
--

LOCK TABLES `tutor_courses` WRITE;
/*!40000 ALTER TABLE `tutor_courses` DISABLE KEYS */;
INSERT INTO `tutor_courses` VALUES (1,17,1,14.99,4.00,0,'2022-01-15 12:48:13','2022-01-25 04:43:24',NULL),(2,18,2,5.00,3.75,0,'2022-01-15 12:48:13','2022-01-25 04:42:16',NULL),(3,19,3,10.99,2.50,0,'2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(4,21,4,8.00,0.00,0,'2022-01-15 12:48:13','2022-01-15 12:48:13',NULL),(5,21,5,14.50,1.00,1,'2022-01-15 12:48:13','2022-01-17 21:13:37','2022-01-17 21:13:37'),(6,23,8,13.50,3.50,0,'2022-01-15 13:01:04','2022-01-15 13:01:04',NULL),(7,23,9,12.50,3.00,0,'2022-01-15 13:20:48','2022-01-15 13:20:48',NULL),(8,23,10,12.50,4.50,0,'2022-01-15 14:54:51','2022-01-15 14:54:51',NULL),(9,23,11,15.50,4.00,0,'2022-01-15 16:21:51','2022-01-15 16:21:51',NULL),(10,20,6,15.50,5.00,0,'2022-01-16 11:24:27','2022-01-16 11:24:27',NULL),(11,23,6,15.50,0.00,0,'2022-01-25 10:47:58','2022-01-25 10:47:58',NULL),(12,24,12,15.50,0.00,0,'2022-01-25 10:49:22','2022-01-25 10:49:22',NULL),(13,25,13,15.50,0.00,0,'2022-01-25 10:52:40','2022-01-25 10:52:40',NULL);
/*!40000 ALTER TABLE `tutor_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile_files`
--

DROP TABLE IF EXISTS `user_profile_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile_files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `fileTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `filePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `approvalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile_files`
--

LOCK TABLES `user_profile_files` WRITE;
/*!40000 ALTER TABLE `user_profile_files` DISABLE KEYS */;
INSERT INTO `user_profile_files` VALUES (1,1,'Resume','C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642291432050-448836138','Approved','2022-01-16 00:03:52','2022-01-16 00:05:18',NULL),(2,1,'CV','C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642292563197-680390435','PendingApproval','2022-01-16 00:22:43','2022-01-24 10:55:41',NULL);
/*!40000 ALTER TABLE `user_profile_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profiles` (
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
  KEY `UserId` (`UserId`) USING BTREE,
  CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profiles`
--

LOCK TABLES `user_profiles` WRITE;
/*!40000 ALTER TABLE `user_profiles` DISABLE KEYS */;
INSERT INTO `user_profiles` VALUES (1,1,NULL,1,'profile_image_1639734254.jpg','my_cv_1639734264.pdf','I am a software engineer and I can help you with programming in different languages','2022-01-15 12:48:13','2022-01-15 12:48:13',NULL);
/*!40000 ALTER TABLE `user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `isStudent` tinyint(1) DEFAULT NULL,
  `isTutor` tinyint(1) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Doe','johndoe@example.com','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1985-05-08',0,1,1,1,0,'2022-01-15 12:48:12','2022-01-15 12:48:12',NULL),(2,'Kyler','Stark','kylerstark@example.com','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1990-02-18',1,0,1,0,0,'2022-01-15 12:48:12','2022-01-15 12:48:12',NULL),(3,'Johnny','Doh','johnnyd@example.com','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',2,1,0,0,0,'2022-01-15 12:48:12','2022-01-15 12:48:12',NULL),(8,'Johnny','Doh','yes40@example.com','$2a$10$tLRCbmqr.5tXBJNhAoHbNe0Zvcpj7t.7S6f.vCW.4bIN3ymjPA00O','1995-08-05',1,1,0,0,0,'2022-01-18 18:51:55','2022-01-18 18:56:24','2022-01-18 18:56:24'),(9,'Johnny','Doh','yes41@example.com','$2a$10$EqOBN6uwtqEPnog9GzL1jug2DxPILxZ5Kqf7H3kJN9zgmNl9Hvkpy','1995-08-05',1,1,0,0,0,'2022-01-18 18:52:47','2022-01-18 18:52:47',NULL),(10,'Johnny','Doh','yes40@example.com','$2a$10$GIR7kH.k9OMTFmZ0Pl8PieoveuAmjENRBXz50jtzNMoTvqP0RLMZ2','1995-08-05',1,1,0,0,0,'2022-01-19 15:03:17','2022-01-19 15:03:17',NULL),(11,'Alexander','Wiegel','alexander.wiegel@hs-fulda.de','$2a$10$3Yv.WxW9SGFuUzbdWCrHLueNU.cMxxvm28gWIbmMWy9yHovlNbNFW','1998-08-08',0,1,0,0,0,'2022-01-23 13:16:18','2022-01-23 13:16:18',NULL),(12,'Student','User','student@hs-fulda.de','$2a$10$h28SLQbHsKwEg6Y4FUx5auE5rkHn0MjE7AWDGtUqLQJZ9iIEn7Sz6','2000-01-19',0,1,0,0,0,'2022-01-24 02:37:29','2022-01-24 02:37:29',NULL),(13,'Chahat','Soni','chahat.soni@informatik.hs-fulda.de','$2a$10$l4vV3D2jMj2YdaNJEiMNk.PejeE/dA2Lxh3rbStdvBnjEPfVCRpO.','2000-01-01',0,1,0,0,0,'2022-01-25 10:49:26','2022-01-25 10:49:26',NULL),(14,'Chahat','Soni','c.s@hs-fulda.de','$2a$10$dbSESz6HkifOmW2m6YoZ1O.VKeSsyTVxQSOU8ZKmpxq8bX.72BtEy','2222-01-01',0,1,0,0,0,'2022-01-25 11:01:27','2022-01-25 11:01:27',NULL),(15,'Chahat','Soni','deegoldy@informatik.hs-fulda.de','$2a$10$YFpnDhL6m.4v/469GljpgONIahLBGqui83.0xp7pKeZ8zh7ioIIRS','2000-02-01',0,1,0,0,0,'2022-01-25 11:04:44','2022-01-25 11:04:44',NULL),(16,'Helfried','Scholz','Helfried.Scholz@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',0,0,1,0,0,'2022-01-25 16:53:57','2022-01-25 16:53:57',NULL),(17,'Ben','Ludwig','ben.ludwig@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',0,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(18,'Paul','Schumacher','paul.schumacher@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',0,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(19,'Luca','Böhm','luca.böhm@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',2,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(20,'Noah','Jäger','noah.jäger@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',0,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(21,'Finn','Kraus','finn.kraus@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',2,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(22,'Elias','Kraus','elias.kraus@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',3,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(23,'Finn','Stein','finn.stein@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',0,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(24,'Elias','Kraus','elias.kraus@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',2,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(25,'Luis','Kraus','luis.kraus@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',1,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL),(26,'Ben','Winter','ben.winter@ai.hs-fulda.de','$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy','1995-08-05',0,0,1,0,0,'2022-01-25 17:03:09','2022-01-25 17:03:09',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-25 18:08:28
