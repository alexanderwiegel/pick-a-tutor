/*
 Navicat Premium Data Transfer

 Source Server         : GDSD Live Dev DB
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : 20.113.56.213:3306
 Source Schema         : db

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 28/01/2022 18:48:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for course_additional_info
-- ----------------------------
DROP TABLE IF EXISTS `course_additional_info`;
CREATE TABLE `course_additional_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `courseId` int NOT NULL,
  `tutorId` int NOT NULL,
  `fileTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `filePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `approvalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `senderId` int NOT NULL,
  `recipientId` int NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `senderId`(`senderId`) USING BTREE,
  INDEX `recipientId`(`recipientId`) USING BTREE,
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipientId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for reviews
-- ----------------------------
DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentId` int NOT NULL,
  `tutorId` int NOT NULL,
  `courseId` int NOT NULL,
  `rating` tinyint NOT NULL,
  `ratingComments` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `reportReview` tinyint NULL DEFAULT NULL,
  `reportReviewComments` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `reporterId` int NULL DEFAULT NULL,
  `reportReviewStatus` tinyint NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `studentId`(`studentId`) USING BTREE,
  INDEX `tutorId`(`tutorId`) USING BTREE,
  INDEX `courseId`(`courseId`) USING BTREE,
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`tutorId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`courseId`) REFERENCES `tutor_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for student_enrolled_courses
-- ----------------------------
DROP TABLE IF EXISTS `student_enrolled_courses`;
CREATE TABLE `student_enrolled_courses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tutorCourseId` int NOT NULL,
  `userId` int NOT NULL,
  `enrolledStatus` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tutorCourseId`(`tutorCourseId`) USING BTREE,
  INDEX `userId`(`userId`) USING BTREE,
  CONSTRAINT `student_enrolled_courses_ibfk_1` FOREIGN KEY (`tutorCourseId`) REFERENCES `tutor_courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `student_enrolled_courses_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for tutor_courses
-- ----------------------------
DROP TABLE IF EXISTS `tutor_courses`;
CREATE TABLE `tutor_courses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `CourseId` int NOT NULL,
  `coursePricePerHour` decimal(4, 2) NULL DEFAULT NULL,
  `rating` decimal(4, 2) NULL DEFAULT 0.00,
  `isFull` tinyint(1) NULL DEFAULT 0,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  `nRatings` int NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `tutor_courses_CourseId_UserId_unique`(`UserId`, `CourseId`) USING BTREE,
  INDEX `CourseId`(`CourseId`) USING BTREE,
  CONSTRAINT `tutor_courses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tutor_courses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for user_profile_files
-- ----------------------------
DROP TABLE IF EXISTS `user_profile_files`;
CREATE TABLE `user_profile_files`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `fileTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `filePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `approvalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for user_profiles
-- ----------------------------
DROP TABLE IF EXISTS `user_profiles`;
CREATE TABLE `user_profiles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `profileType` tinyint(1) NULL DEFAULT NULL,
  `isApproved` tinyint(1) NOT NULL DEFAULT 0,
  `profileImagePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cvPath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `UserId`(`UserId`) USING BTREE,
  CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rating` decimal(4, 2) NOT NULL DEFAULT 0.00,
  `dateOfBirth` date NULL DEFAULT NULL,
  `gender` tinyint(1) NULL DEFAULT NULL,
  `isStudent` tinyint(1) NULL DEFAULT NULL,
  `isTutor` tinyint(1) NULL DEFAULT NULL,
  `isAdmin` tinyint(1) NULL DEFAULT 0,
  `status` tinyint(1) NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  `nRatings` int NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
