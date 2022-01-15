/*
 Navicat Premium Data Transfer

 Source Server         : GDSD Live Dev DB
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : 20.113.25.17:3306
 Source Schema         : db

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 15/01/2022 17:41:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES (1, 'Java', 'Java programming language course', '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `courses` VALUES (2, 'Python', 'Python programming language course', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `courses` VALUES (3, 'C#', 'C# programming language course', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `courses` VALUES (4, 'Deutsch A1', 'German language for beginners', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `courses` VALUES (5, 'Deutsch A2', 'German language for beginners', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `courses` VALUES (6, '2nd Level Java', 'Second Level Java Mate', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `courses` VALUES (7, '3rd Level Advanced java', 'Third level Advanced Java', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `courses` VALUES (8, '3rd Level Java', '3rd Level Java', '2022-01-15 13:01:04', '2022-01-15 13:01:04', NULL);
INSERT INTO `courses` VALUES (9, '4th Level Java', '4th Level Java', '2022-01-15 13:20:48', '2022-01-15 13:20:48', NULL);
INSERT INTO `courses` VALUES (10, '5th Level Java', '5th Level Java', '2022-01-15 14:54:51', '2022-01-15 14:54:51', NULL);
INSERT INTO `courses` VALUES (11, '6th Level Java', '6th Level Java', '2022-01-15 16:21:51', '2022-01-15 16:21:51', NULL);

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `senderId` int NOT NULL,
  `recipientId` int NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `senderId`(`senderId`) USING BTREE,
  INDEX `recipientId`(`recipientId`) USING BTREE,
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipientId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (1, 1, 2, 'Hey, what\'s up?', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `messages` VALUES (2, 2, 1, 'All good', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reviews
-- ----------------------------
INSERT INTO `reviews` VALUES (1, 1, 1, 1, 1, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (2, 1, 1, 1, 3, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (3, 1, 1, 1, 5, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (4, 1, 2, 1, 8, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (5, 1, 2, 1, 1, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (6, 3, 2, 4, 5, 'The teacher is amazing', NULL, '', NULL, NULL, '2022-01-15 16:37:33', '2022-01-15 16:37:33', NULL);

-- ----------------------------
-- Table structure for tutor_courses
-- ----------------------------
DROP TABLE IF EXISTS `tutor_courses`;
CREATE TABLE `tutor_courses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int NOT NULL,
  `CourseId` int NOT NULL,
  `coursePricePerHour` decimal(4, 2) NULL DEFAULT NULL,
  `isFull` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `tutor_courses_CourseId_UserId_unique`(`UserId`, `CourseId`) USING BTREE,
  INDEX `CourseId`(`CourseId`) USING BTREE,
  CONSTRAINT `tutor_courses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tutor_courses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tutor_courses
-- ----------------------------
INSERT INTO `tutor_courses` VALUES (1, 1, 1, 14.99, NULL, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (2, 1, 2, 12.99, NULL, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (3, 1, 3, 10.99, NULL, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (4, 2, 4, 10.00, NULL, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (5, 2, 5, 12.00, NULL, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (6, 2, 8, 13.50, 0, '2022-01-15 13:01:04', '2022-01-15 13:01:04', NULL);
INSERT INTO `tutor_courses` VALUES (7, 2, 9, 12.50, 0, '2022-01-15 13:20:48', '2022-01-15 13:20:48', NULL);
INSERT INTO `tutor_courses` VALUES (8, 2, 10, 12.50, 0, '2022-01-15 14:54:51', '2022-01-15 14:54:51', NULL);
INSERT INTO `tutor_courses` VALUES (9, 2, 11, 15.50, 0, '2022-01-15 16:21:51', '2022-01-15 16:21:51', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_profiles
-- ----------------------------
INSERT INTO `user_profiles` VALUES (1, 1, NULL, 0, 'profile_image_1639734254.jpg', 'my_cv_1639734264.pdf', 'I am a software engineer and I can help you with programming in different languages', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);

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
  `dateOfBirth` date NULL DEFAULT NULL,
  `gender` tinyint(1) NULL DEFAULT NULL,
  `isStudent` tinyint(1) NULL DEFAULT NULL,
  `isTutor` tinyint(1) NULL DEFAULT NULL,
  `isAdmin` tinyint(1) NULL DEFAULT 0,
  `status` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'John', 'Doe', 'johndoe@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '1985-05-08', 0, 1, 1, 1, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (2, 'Kyler', 'Stark', 'kylerstark@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '1990-02-18', 1, 0, 1, 0, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (3, 'Johnny', 'Doh', 'johnnyd@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '1995-08-05', 2, 1, 0, 0, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);

SET FOREIGN_KEY_CHECKS = 1;
