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

 Date: 19/01/2022 16:20:33
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
INSERT INTO `course_additional_info` VALUES (1, 1, 1, 'CVFilee', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852', 'PendingApproval', '2022-01-16 00:20:58', '2022-01-16 00:21:25', '2022-01-16 00:21:25');

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipientId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (1, 1, 2, 'First4sdgadfd2Message', '2022-01-18 16:33:41', '2022-01-18 16:33:41', NULL);
INSERT INTO `messages` VALUES (2, 1, 2, 'First2sdgadfd2Message', '2022-01-18 16:33:54', '2022-01-18 16:33:54', NULL);
INSERT INTO `messages` VALUES (3, 3, 2, 'First1sdgadfd2Message', '2022-01-18 16:34:17', '2022-01-18 16:34:17', NULL);
INSERT INTO `messages` VALUES (5, 2, 1, 'First1sdgadfd2Message', '2022-01-18 17:06:53', '2022-01-18 17:06:53', NULL);
INSERT INTO `messages` VALUES (6, 3, 4, 'Hi 4!', '2022-01-18 17:35:45', '2022-01-18 17:35:45', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of reviews
-- ----------------------------
INSERT INTO `reviews` VALUES (1, 3, 1, 1, 1, 'Spank me daddy', 1, 'Tutor has no kids', 2, 1, '2021-12-04 00:00:00', '2022-01-16 13:36:58', NULL);
INSERT INTO `reviews` VALUES (2, 1, 1, 1, 3, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (3, 1, 1, 1, 5, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (4, 1, 2, 1, 8, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (5, 1, 2, 1, 1, NULL, NULL, NULL, NULL, 1, '2021-12-04 00:00:00', '2022-01-15 13:01:13', NULL);
INSERT INTO `reviews` VALUES (6, 3, 2, 4, 5, 'The teacher is amazing', NULL, '', NULL, NULL, '2022-01-15 16:37:33', '2022-01-15 16:37:33', NULL);
INSERT INTO `reviews` VALUES (9, 3, 2, 4, 5, 'The teacher is awesome!', NULL, '', NULL, NULL, '2022-01-16 10:47:34', '2022-01-16 10:47:34', NULL);
INSERT INTO `reviews` VALUES (10, 3, 2, 4, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:16', '2022-01-16 10:49:16', NULL);
INSERT INTO `reviews` VALUES (11, 3, 2, 5, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:43', '2022-01-16 10:49:43', NULL);
INSERT INTO `reviews` VALUES (17, 3, 2, 2, 5, 'The teacher is awesome!', NULL, '', 3, NULL, '2022-01-19 15:03:38', '2022-01-19 15:03:38', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of student_enrolled_courses
-- ----------------------------
INSERT INTO `student_enrolled_courses` VALUES (1, 2, 1, 0, '2022-01-16 14:10:57', '2022-01-16 14:10:57', NULL);
INSERT INTO `student_enrolled_courses` VALUES (2, 3, 1, 0, '2022-01-16 14:11:00', '2022-01-16 14:11:00', NULL);
INSERT INTO `student_enrolled_courses` VALUES (3, 1, 1, 0, '2022-01-16 14:11:05', '2022-01-16 14:11:05', NULL);
INSERT INTO `student_enrolled_courses` VALUES (4, 4, 1, 0, '2022-01-16 14:11:07', '2022-01-16 14:11:07', NULL);
INSERT INTO `student_enrolled_courses` VALUES (5, 4, 3, 0, '2022-01-16 15:11:50', '2022-01-16 15:11:50', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tutor_courses
-- ----------------------------
INSERT INTO `tutor_courses` VALUES (1, 1, 1, 14.99, 2.00, 0, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (2, 1, 2, 5.00, 5.00, 0, '2022-01-15 12:48:13', '2022-01-19 15:03:38', NULL);
INSERT INTO `tutor_courses` VALUES (3, 1, 3, 10.99, 2.50, 0, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (4, 2, 4, 8.00, 0.00, 0, '2022-01-15 12:48:13', '2022-01-15 12:48:13', NULL);
INSERT INTO `tutor_courses` VALUES (5, 2, 5, 14.50, 1.00, 1, '2022-01-15 12:48:13', '2022-01-17 21:13:37', '2022-01-17 21:13:37');
INSERT INTO `tutor_courses` VALUES (6, 2, 8, 13.50, 3.50, 0, '2022-01-15 13:01:04', '2022-01-15 13:01:04', NULL);
INSERT INTO `tutor_courses` VALUES (7, 2, 9, 12.50, 3.00, 0, '2022-01-15 13:20:48', '2022-01-15 13:20:48', NULL);
INSERT INTO `tutor_courses` VALUES (8, 2, 10, 12.50, 4.50, 0, '2022-01-15 14:54:51', '2022-01-15 14:54:51', NULL);
INSERT INTO `tutor_courses` VALUES (9, 2, 11, 15.50, 4.00, 0, '2022-01-15 16:21:51', '2022-01-15 16:21:51', NULL);
INSERT INTO `tutor_courses` VALUES (10, 2, 6, 15.50, 5.00, 0, '2022-01-16 11:24:27', '2022-01-16 11:24:27', NULL);

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
INSERT INTO `user_profile_files` VALUES (1, 1, 'CV', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642291432050-448836138', 'PendingApproval', '2022-01-16 00:03:52', '2022-01-16 00:05:18', '2022-01-16 00:05:18');
INSERT INTO `user_profile_files` VALUES (2, 1, 'CV', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642292563197-680390435', 'PendingApproval', '2022-01-16 00:22:43', '2022-01-16 00:22:43', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'John', 'Doe', 'johndoe@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '1985-05-08', 0, 1, 1, 1, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (2, 'Kyler', 'Stark', 'kylerstark@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '1990-02-18', 1, 0, 1, 0, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (3, 'Johnny', 'Doh', 'johnnyd@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', '1995-08-05', 2, 1, 0, 0, 0, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL);
INSERT INTO `users` VALUES (4, 'Sometutor', 'Doh', 'sometutor.doh@ai.hs-fulda.de', '$2a$10$fUqQlkLDSb.27W.kwncUBeti2jLK0viohWDpVRVbO0H1EMypnQMsO', '1995-08-05', 1, 0, 1, 0, 0, '2022-01-16 13:27:17', '2022-01-16 13:27:17', NULL);
INSERT INTO `users` VALUES (5, 'Sometutor', 'Dohe', 'sometutor.dohe@ai.hs-fulda.de', '$2a$10$Xdf74FbAz8jV3hYpzJ2JrO.8X2KuHeLvr.qgCE7GW3cIlXOaivepm', '1995-08-05', 1, 0, 1, 0, 0, '2022-01-16 13:29:38', '2022-01-16 13:29:38', NULL);
INSERT INTO `users` VALUES (6, 'Sometutor', 'Dohe1', 'sometutor.dohe1@ai.hs-fulda.de', '$2a$10$nvxRd1Gp59hk3nYmD/vIxuZ5L17363lIv64HtjaeqonneStGPObka', '1995-08-05', 1, 0, 1, 0, 0, '2022-01-16 13:30:36', '2022-01-16 13:30:36', NULL);
INSERT INTO `users` VALUES (7, 'Alexander', 'Wiegel', 'alexander.wiegel@ai.hs-fulda.de', NULL, '1998-08-08', 1, 0, NULL, 1, 0, '2022-01-18 14:10:00', '2022-01-18 14:10:00', NULL);
INSERT INTO `users` VALUES (8, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$tLRCbmqr.5tXBJNhAoHbNe0Zvcpj7t.7S6f.vCW.4bIN3ymjPA00O', '1995-08-05', 1, 1, 0, 0, 0, '2022-01-18 18:51:55', '2022-01-18 18:56:24', '2022-01-18 18:56:24');
INSERT INTO `users` VALUES (9, 'Johnny', 'Doh', 'yes41@example.com', '$2a$10$EqOBN6uwtqEPnog9GzL1jug2DxPILxZ5Kqf7H3kJN9zgmNl9Hvkpy', '1995-08-05', 1, 1, 0, 0, 0, '2022-01-18 18:52:47', '2022-01-18 18:52:47', NULL);
INSERT INTO `users` VALUES (10, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$GIR7kH.k9OMTFmZ0Pl8PieoveuAmjENRBXz50jtzNMoTvqP0RLMZ2', '1995-08-05', 1, 1, 0, 0, 0, '2022-01-19 15:03:17', '2022-01-19 15:03:17', NULL);

SET FOREIGN_KEY_CHECKS = 1;
