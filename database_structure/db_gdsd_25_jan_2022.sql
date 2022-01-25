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

 Date: 25/01/2022 21:21:51
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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of course_additional_info
-- ----------------------------
INSERT INTO `course_additional_info` VALUES (1, 1, 1, 'CVFilee', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852', 'Approved', '2022-01-16 00:20:58', '2022-01-16 00:21:25', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `courses` VALUES (12, 'CSS for All', 'CSS for All', '2022-01-25 10:49:22', '2022-01-25 10:49:22', NULL);
INSERT INTO `courses` VALUES (13, 'NFTs 101', 'NFTs 101', '2022-01-25 10:52:40', '2022-01-25 10:52:40', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (6, 1, 2, 'Hey Kyler! This is John Doe.', 1, '2022-01-24 22:17:09', '2022-01-24 22:17:21', NULL);
INSERT INTO `messages` VALUES (7, 2, 1, 'Hey John!', 1, '2022-01-24 22:17:47', '2022-01-24 22:18:21', NULL);
INSERT INTO `messages` VALUES (8, 2, 1, 'What\'s up?', 1, '2022-01-24 22:18:06', '2022-01-24 22:18:21', NULL);
INSERT INTO `messages` VALUES (9, 1, 2, 'Just wanted to say \"Hello\".', 1, '2022-01-24 22:23:43', '2022-01-24 22:24:42', NULL);
INSERT INTO `messages` VALUES (10, 1, 2, 'Right now, I can\'t think of anything else.', 1, '2022-01-24 22:24:10', '2022-01-24 22:24:42', NULL);
INSERT INTO `messages` VALUES (11, 13, 1, 'Hello Mr. Doe,\nI would like to join your course. How do I apply for it?', 0, '2022-01-25 11:53:29', '2022-01-25 11:53:29', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of reviews
-- ----------------------------
INSERT INTO `reviews` VALUES (1, 3, 1, 1, 1, 'Spank me daddy', 1, 'Tutor has no kids', 1, 1, '2021-12-04 00:00:00', '2022-01-25 17:51:27', NULL);
INSERT INTO `reviews` VALUES (2, 1, 1, 1, 3, 'Great course!', 1, NULL, 1, 1, '2021-12-04 00:00:00', '2022-01-25 17:58:27', NULL);
INSERT INTO `reviews` VALUES (3, 1, 1, 1, 5, NULL, 1, NULL, 1, 1, '2021-12-04 00:00:00', '2022-01-25 18:02:02', NULL);
INSERT INTO `reviews` VALUES (4, 1, 2, 1, 5, NULL, 1, NULL, 1, 1, '2021-12-04 00:00:00', '2022-01-25 18:07:28', NULL);
INSERT INTO `reviews` VALUES (5, 1, 2, 1, 1, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (6, 3, 2, 4, 5, 'The teacher is amazing', NULL, '', NULL, NULL, '2022-01-15 16:37:33', '2022-01-15 16:37:33', NULL);
INSERT INTO `reviews` VALUES (9, 3, 2, 4, 5, 'The teacher is awesome!', NULL, '', NULL, NULL, '2022-01-16 10:47:34', '2022-01-16 10:47:34', NULL);
INSERT INTO `reviews` VALUES (10, 3, 2, 4, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:16', '2022-01-16 10:49:16', NULL);
INSERT INTO `reviews` VALUES (11, 3, 2, 5, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:43', '2022-01-16 10:49:43', NULL);
INSERT INTO `reviews` VALUES (17, 3, 2, 2, 5, 'The teacher is awesome!', NULL, '', 3, NULL, '2022-01-19 15:03:38', '2022-01-19 15:03:38', NULL);
INSERT INTO `reviews` VALUES (18, 1, 2, 1, 5, 'Very good course, I totally recommend it!', 1, '', 1, NULL, '2022-01-25 03:39:16', '2022-01-25 18:20:28', NULL);
INSERT INTO `reviews` VALUES (19, 2, 1, 2, 1, 'basic', NULL, '', 1, NULL, '2022-01-25 04:36:22', '2022-01-25 04:36:22', NULL);
INSERT INTO `reviews` VALUES (20, 2, 1, 2, 4, 'Very good introduction.', NULL, '', 1, NULL, '2022-01-25 04:41:02', '2022-01-25 04:41:02', NULL);
INSERT INTO `reviews` VALUES (21, 2, 1, 2, 5, 'Awesome course', NULL, '', 1, NULL, '2022-01-25 04:42:16', '2022-01-25 04:42:16', NULL);
INSERT INTO `reviews` VALUES (22, 2, 1, 1, 5, 'Makes Java easy again', NULL, '', 1, NULL, '2022-01-25 04:43:24', '2022-01-25 04:43:24', NULL);
INSERT INTO `reviews` VALUES (23, 1, 17, 1, 5, 'Good', NULL, '', 1, NULL, '2022-01-25 17:31:32', '2022-01-25 17:31:32', NULL);
INSERT INTO `reviews` VALUES (24, 15, 23, 8, 4, 'The teacher is very cute!', NULL, '', 15, NULL, '2022-01-25 20:15:35', '2022-01-25 20:15:35', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of student_enrolled_courses
-- ----------------------------
INSERT INTO `student_enrolled_courses` VALUES (1, 2, 1, 0, '2022-01-16 14:10:57', '2022-01-16 14:10:57', NULL);
INSERT INTO `student_enrolled_courses` VALUES (2, 3, 1, 0, '2022-01-16 14:11:00', '2022-01-16 14:11:00', NULL);
INSERT INTO `student_enrolled_courses` VALUES (3, 1, 1, 0, '2022-01-16 14:11:05', '2022-01-16 14:11:05', NULL);
INSERT INTO `student_enrolled_courses` VALUES (4, 4, 1, 0, '2022-01-16 14:11:07', '2022-01-16 14:11:07', NULL);
INSERT INTO `student_enrolled_courses` VALUES (5, 4, 3, 0, '2022-01-16 15:11:50', '2022-01-16 15:11:50', NULL);
INSERT INTO `student_enrolled_courses` VALUES (6, 8, 13, 0, '2022-01-25 11:53:59', '2022-01-25 11:53:59', NULL);

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
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `tutor_courses_CourseId_UserId_unique`(`UserId`, `CourseId`) USING BTREE,
  INDEX `CourseId`(`CourseId`) USING BTREE,
  CONSTRAINT `tutor_courses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tutor_courses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tutor_courses
-- ----------------------------
INSERT INTO `tutor_courses` VALUES (1, 17, 1, 14.99, 4.13, 0, '2022-01-15 12:48:13', '2022-01-25 17:31:32', NULL);
INSERT INTO `tutor_courses` VALUES (2, 18, 2, 5.00, 3.75, 0, '2022-01-15 12:48:13', '2022-01-25 04:42:16', NULL);
INSERT INTO `tutor_courses` VALUES (3, 19, 3, 10.99, 2.50, 0, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (4, 21, 4, 8.00, 0.00, 0, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (5, 21, 5, 14.50, 1.00, 1, '2022-01-15 12:48:13', '2022-01-17 21:13:37', '2022-01-17 21:13:37');
INSERT INTO `tutor_courses` VALUES (6, 23, 8, 13.50, 4.00, 0, '2022-01-15 13:01:04', '2022-01-15 13:01:04', NULL);
INSERT INTO `tutor_courses` VALUES (8, 23, 10, 12.50, 4.50, 0, '2022-01-15 14:54:51', '2022-01-25 20:17:10', NULL);
INSERT INTO `tutor_courses` VALUES (10, 20, 6, 15.50, 5.00, 0, '2022-01-16 11:24:27', '2022-01-16 11:24:27', NULL);
INSERT INTO `tutor_courses` VALUES (12, 24, 12, 15.50, 0.00, 0, '2022-01-25 10:49:22', '2022-01-25 10:49:22', NULL);
INSERT INTO `tutor_courses` VALUES (13, 25, 13, 15.50, 0.00, 0, '2022-01-25 10:52:40', '2022-01-25 10:52:40', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_profile_files
-- ----------------------------
INSERT INTO `user_profile_files` VALUES (1, 1, 'Resume', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642291432050-448836138', 'Approved', '2022-01-16 00:03:52', '2022-01-16 00:05:18', NULL);
INSERT INTO `user_profile_files` VALUES (2, 1, 'CV', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642292563197-680390435', 'PendingApproval', '2022-01-16 00:22:43', '2022-01-24 10:55:41', NULL);
INSERT INTO `user_profile_files` VALUES (3, 2, 'TestfilePDF', '/storage/profile_uploads/User-2-1643131326250-914361478.pdf', 'PendingApproval', '2022-01-25 17:22:06', '2022-01-25 17:22:06', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_profiles
-- ----------------------------
INSERT INTO `user_profiles` VALUES (1, 1, NULL, 1, 'profile_image_1639734254.jpg', 'my_cv_1639734264.pdf', 'I am a software engineer and I can help you with programming in different languages', '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);

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
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'John', 'Doe', 'johndoe@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1985-05-08', 0, 1, 1, 1, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (2, 'Kyler', 'Stark', 'kylerstark@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1990-02-18', 1, 0, 1, 0, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (3, 'Johnny', 'Doh', 'johnnyd@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 2, 1, 0, 0, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (8, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$tLRCbmqr.5tXBJNhAoHbNe0Zvcpj7t.7S6f.vCW.4bIN3ymjPA00O', 0.00, '1995-08-05', 1, 1, 0, 0, 0, '2022-01-18 18:51:55', '2022-01-18 18:56:24', '2022-01-18 18:56:24');
INSERT INTO `users` VALUES (9, 'Johnny', 'Doh', 'yes41@example.com', '$2a$10$EqOBN6uwtqEPnog9GzL1jug2DxPILxZ5Kqf7H3kJN9zgmNl9Hvkpy', 0.00, '1995-08-05', 1, 1, 0, 0, 0, '2022-01-18 18:52:47', '2022-01-18 18:52:47', NULL);
INSERT INTO `users` VALUES (10, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$GIR7kH.k9OMTFmZ0Pl8PieoveuAmjENRBXz50jtzNMoTvqP0RLMZ2', 0.00, '1995-08-05', 1, 1, 0, 0, 0, '2022-01-19 15:03:17', '2022-01-19 15:03:17', NULL);
INSERT INTO `users` VALUES (11, 'Alexander', 'Wiegel', 'alexander.wiegel@hs-fulda.de', '$2a$10$3Yv.WxW9SGFuUzbdWCrHLueNU.cMxxvm28gWIbmMWy9yHovlNbNFW', 0.00, '1998-08-08', 0, 1, 0, 0, 0, '2022-01-23 13:16:18', '2022-01-23 13:16:18', NULL);
INSERT INTO `users` VALUES (12, 'Student', 'User', 'student@hs-fulda.de', '$2a$10$h28SLQbHsKwEg6Y4FUx5auE5rkHn0MjE7AWDGtUqLQJZ9iIEn7Sz6', 0.00, '2000-01-19', 0, 1, 0, 0, 0, '2022-01-24 02:37:29', '2022-01-24 02:37:29', NULL);
INSERT INTO `users` VALUES (13, 'Chahat', 'Soni', 'chahat.soni@informatik.hs-fulda.de', '$2a$10$l4vV3D2jMj2YdaNJEiMNk.PejeE/dA2Lxh3rbStdvBnjEPfVCRpO.', 0.00, '2000-01-01', 0, 1, 0, 0, 0, '2022-01-25 10:49:26', '2022-01-25 10:49:26', NULL);
INSERT INTO `users` VALUES (14, 'Chahat', 'Soni', 'c.s@hs-fulda.de', '$2a$10$dbSESz6HkifOmW2m6YoZ1O.VKeSsyTVxQSOU8ZKmpxq8bX.72BtEy', 0.00, '2222-01-01', 0, 1, 0, 0, 0, '2022-01-25 11:01:27', '2022-01-25 11:01:27', NULL);
INSERT INTO `users` VALUES (15, 'Chahat', 'Soni', 'deegoldy@informatik.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '2000-02-01', 0, 1, 0, 0, 0, '2022-01-25 11:04:44', '2022-01-25 11:04:44', NULL);
INSERT INTO `users` VALUES (16, 'Helfried', 'Scholz', 'Helfried.Scholz@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 0, 0, 1, 0, 0, '2022-01-25 16:53:57', '2022-01-25 16:53:57', NULL);
INSERT INTO `users` VALUES (17, 'Ben', 'Ludwig', 'ben.ludwig@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 4.13, '1995-08-05', 0, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (18, 'Paul', 'Schumacher', 'paul.schumacher@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 3.75, '1995-08-05', 0, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (19, 'Luca', 'Böhm', 'luca.böhm@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 2.50, '1995-08-05', 2, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (20, 'Noah', 'Jäger', 'noah.jäger@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 5.00, '1995-08-05', 0, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (21, 'Finn', 'Kraus', 'finn.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 2, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (22, 'Elias', 'Kraus', 'elias.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 3, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (23, 'Finn', 'Stein', 'finn.stein@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 4.50, '1995-08-05', 0, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 20:17:10', NULL);
INSERT INTO `users` VALUES (24, 'Elias', 'Kraus', 'elias.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 2, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (25, 'Luis', 'Kraus', 'luis.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 1, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);
INSERT INTO `users` VALUES (26, 'Ben', 'Winter', 'ben.winter@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 0, 0, 1, 0, 0, '2022-01-25 17:03:09', '2022-01-25 17:03:09', NULL);

SET FOREIGN_KEY_CHECKS = 1;
