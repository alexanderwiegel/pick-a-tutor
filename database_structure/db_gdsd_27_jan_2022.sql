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

 Date: 27/01/2022 18:02:13
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
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of course_additional_info
-- ----------------------------
INSERT INTO `course_additional_info` VALUES (1, 1, 1, 'CVFilee', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852', 'Approved', '2022-01-16 00:20:58', '2022-01-16 00:21:25', NULL);
INSERT INTO `course_additional_info` VALUES (2, 8, 27, 'Test', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\courseuploads\\Course-1-1642292458491-288903852', 'Approved', '2022-01-16 00:20:58', '2022-01-16 00:21:25', NULL);
INSERT INTO `course_additional_info` VALUES (3, 18, 27, 'test.txt', '/storage/course_uploads/Course-27-1643209433350-6094103.txt', 'PendingApproval', '2022-01-26 15:03:53', '2022-01-27 03:42:10', '2022-01-27 03:42:10');
INSERT INTO `course_additional_info` VALUES (4, 22, 27, 'test3.txt', '/storage/course_uploads/Course-27-1643209904327-720162111.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 15:11:44', NULL);
INSERT INTO `course_additional_info` VALUES (5, 22, 27, 'test1.txt', '/storage/course_uploads/Course-27-1643209904353-382038916.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 15:11:44', NULL);
INSERT INTO `course_additional_info` VALUES (6, 22, 27, 'test2.txt', '/storage/course_uploads/Course-27-1643209904355-508864088.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 18:06:30', '2022-01-26 18:06:30');
INSERT INTO `course_additional_info` VALUES (7, 22, 27, 'test4.txt', '/storage/course_uploads/Course-27-1643209904355-508864088.function stream() { [native code] }', 'PendingApproval', '2022-01-26 15:11:44', '2022-01-26 18:08:54', '2022-01-26 18:08:54');
INSERT INTO `course_additional_info` VALUES (8, 22, 27, 'test7.txt', '/storage/course_uploads/Course-27-1643223696523-413387542.function stream() { [native code] }', 'PendingApproval', '2022-01-26 19:01:36', '2022-01-26 19:01:36', NULL);
INSERT INTO `course_additional_info` VALUES (9, 22, 27, 'test5.txt', '/storage/course_uploads/Course-27-1643223696539-692929020.function stream() { [native code] }', 'PendingApproval', '2022-01-26 19:01:36', '2022-01-26 19:01:36', NULL);
INSERT INTO `course_additional_info` VALUES (10, 22, 27, 'test6.txt', '/storage/course_uploads/Course-27-1643223696544-127252456.function stream() { [native code] }', 'PendingApproval', '2022-01-26 19:01:36', '2022-01-26 21:57:11', '2022-01-26 21:57:11');
INSERT INTO `course_additional_info` VALUES (11, 22, 27, 'test4.txt', '/storage/course_uploads/Course-27-1643223696549-158538189.function stream() { [native code] }', 'Approved', '2022-01-26 19:01:36', '2022-01-27 05:18:10', NULL);
INSERT INTO `course_additional_info` VALUES (12, 15, 27, 'test1.txt', '/storage/course_uploads/Course-27-1643247626991-324740027.function stream() { [native code] }', 'PendingApproval', '2022-01-27 01:40:27', '2022-01-27 01:43:43', '2022-01-27 01:43:43');
INSERT INTO `course_additional_info` VALUES (13, 15, 27, 'test2.txt', '/storage/course_uploads/Course-27-1643247627024-571024863.function stream() { [native code] }', 'PendingApproval', '2022-01-27 01:40:27', '2022-01-27 01:40:38', '2022-01-27 01:40:38');
INSERT INTO `course_additional_info` VALUES (14, 15, 27, 'test3.txt', '/storage/course_uploads/Course-27-1643247627026-994809061.function stream() { [native code] }', 'PendingApproval', '2022-01-27 01:40:27', '2022-01-27 01:40:27', NULL);
INSERT INTO `course_additional_info` VALUES (15, 18, 27, 'test3.txt', '/storage/course_uploads/Course-27-1643254920036-478636752.function stream() { [native code] }', 'Approved', '2022-01-27 03:42:00', '2022-01-27 05:18:12', NULL);
INSERT INTO `course_additional_info` VALUES (16, 18, 27, 'test4.txt', '/storage/course_uploads/Course-27-1643254920039-386708963.function stream() { [native code] }', 'PendingApproval', '2022-01-27 03:42:00', '2022-01-27 03:42:00', NULL);
INSERT INTO `course_additional_info` VALUES (17, 18, 27, 'test5.txt', '/storage/course_uploads/Course-27-1643254920062-558826279.function stream() { [native code] }', 'Approved', '2022-01-27 03:42:00', '2022-01-27 05:18:13', NULL);
INSERT INTO `course_additional_info` VALUES (18, 23, 27, 'toefl.txt', '/storage/course_uploads/Course-27-1643255391575-554256722.function stream() { [native code] }', 'PendingApproval', '2022-01-27 03:49:51', '2022-01-27 03:49:51', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `courses` VALUES (8, '3rd Level Java', '3rd Level Java', '2022-01-15 13:01:04', '2022-01-15 13:01:04', '2022-01-15 13:01:04');
INSERT INTO `courses` VALUES (9, '4th Level Java', '4th Level Java', '2022-01-15 13:20:48', '2022-01-15 13:20:48', NULL);
INSERT INTO `courses` VALUES (10, '5th Level Java', '5th Level Java', '2022-01-15 14:54:51', '2022-01-15 14:54:51', NULL);
INSERT INTO `courses` VALUES (11, '6th Level Java', '6th Level Java', '2022-01-15 16:21:51', '2022-01-15 16:21:51', NULL);
INSERT INTO `courses` VALUES (12, 'CSS for All', 'CSS for All', '2022-01-25 10:49:22', '2022-01-25 10:49:22', NULL);
INSERT INTO `courses` VALUES (13, 'NFTs 101', 'NFTs 101', '2022-01-25 10:52:40', '2022-01-25 10:52:40', NULL);
INSERT INTO `courses` VALUES (14, 'Maths for beginners', 'Maths for beginners', '2022-01-26 14:01:47', '2022-01-26 14:01:47', NULL);
INSERT INTO `courses` VALUES (15, 'Drawing for all', 'Drawing for all', '2022-01-26 14:25:24', '2022-01-26 14:25:24', NULL);
INSERT INTO `courses` VALUES (16, 'Physics exam prep', 'Physics exam prep', '2022-01-26 14:26:49', '2022-01-26 14:26:49', NULL);
INSERT INTO `courses` VALUES (17, 'Piano', 'Piano', '2022-01-26 14:28:26', '2022-01-26 14:28:26', NULL);
INSERT INTO `courses` VALUES (18, 'Geography', 'Geography', '2022-01-26 14:30:13', '2022-01-26 14:30:13', NULL);
INSERT INTO `courses` VALUES (19, 'SAT prep ', 'SAT prep ', '2022-01-26 14:31:23', '2022-01-26 14:31:23', NULL);
INSERT INTO `courses` VALUES (20, 'Math', 'Math', '2022-01-26 14:59:57', '2022-01-26 14:59:57', NULL);
INSERT INTO `courses` VALUES (21, 'Drawing 101', 'Drawing 101', '2022-01-26 15:08:13', '2022-01-26 15:08:13', NULL);
INSERT INTO `courses` VALUES (22, 'Course with files', 'Course with files', '2022-01-26 15:11:44', '2022-01-26 15:11:44', NULL);
INSERT INTO `courses` VALUES (23, 'Toefl', 'Toefl', '2022-01-27 03:49:51', '2022-01-27 03:49:51', NULL);
INSERT INTO `courses` VALUES (24, 'RTORTORTO', 'RTORTORTO', '2022-01-27 16:26:10', '2022-01-27 16:26:10', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (14, 29, 17, 'Hi, can I study with you?\n', 1, '2022-01-27 16:14:02', '2022-01-27 16:36:10', NULL);
INSERT INTO `messages` VALUES (15, 29, 17, 'Hi\n', 1, '2022-01-27 16:35:18', '2022-01-27 16:36:10', NULL);
INSERT INTO `messages` VALUES (16, 13, 17, 'hello', 0, '2022-01-27 16:36:02', '2022-01-27 16:36:02', NULL);
INSERT INTO `messages` VALUES (17, 29, 17, 'Answer me please', 1, '2022-01-27 16:36:15', '2022-01-27 16:36:39', NULL);
INSERT INTO `messages` VALUES (18, 29, 17, 'Hello San-Francisco', 1, '2022-01-27 16:36:34', '2022-01-27 16:36:39', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of reviews
-- ----------------------------
INSERT INTO `reviews` VALUES (1, 3, 1, 1, 5, 'Spank me daddy', 1, 'Tutor has no kids', 1, 1, '2021-12-04 00:00:00', '2022-01-26 14:57:35', '2022-01-26 14:57:35');
INSERT INTO `reviews` VALUES (2, 3, 17, 1, 5, 'Ben is awesome!', 1, 'That\'s not true!', 1, 0, '2021-12-04 00:00:00', '2022-01-26 15:54:12', '2022-01-26 15:54:12');
INSERT INTO `reviews` VALUES (3, 3, 17, 1, 5, 'Ben is awesome too!', 0, 'That\'s not true!', 1, NULL, '2021-12-04 00:00:00', '2022-01-26 16:23:06', NULL);
INSERT INTO `reviews` VALUES (4, 3, 17, 1, 5, 'Ben is awesome with ID4!', 1, 'That\'s not true!', 6, NULL, '2021-12-04 00:00:00', '2022-01-27 16:01:22', NULL);
INSERT INTO `reviews` VALUES (9, 3, 2, 4, 5, 'The teacher is awesome!', NULL, '', NULL, NULL, '2022-01-16 10:47:34', '2022-01-16 10:47:34', NULL);
INSERT INTO `reviews` VALUES (10, 3, 2, 4, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:16', '2022-01-16 10:49:16', NULL);
INSERT INTO `reviews` VALUES (11, 3, 2, 5, 5, 'The teacher is awesome!!', NULL, '', NULL, NULL, '2022-01-16 10:49:43', '2022-01-16 10:49:43', NULL);
INSERT INTO `reviews` VALUES (17, 3, 2, 2, 5, 'The teacher is awesome!', NULL, '', 3, NULL, '2022-01-19 15:03:38', '2022-01-19 15:03:38', NULL);
INSERT INTO `reviews` VALUES (19, 2, 1, 2, 1, 'basic', 1, '', 3, NULL, '2022-01-25 04:36:22', '2022-01-27 01:16:31', NULL);
INSERT INTO `reviews` VALUES (20, 2, 1, 2, 4, 'Very good introduction.', NULL, '', 1, NULL, '2022-01-25 04:41:02', '2022-01-25 04:41:02', NULL);
INSERT INTO `reviews` VALUES (21, 2, 1, 2, 5, 'Awesome course', NULL, '', 1, NULL, '2022-01-25 04:42:16', '2022-01-25 04:42:16', NULL);
INSERT INTO `reviews` VALUES (22, 2, 1, 1, 5, 'Makes Java easy again', 1, '', 28, NULL, '2022-01-25 04:43:24', '2022-01-27 00:30:01', NULL);
INSERT INTO `reviews` VALUES (23, 1, 17, 1, 5, 'Good', NULL, '', 1, NULL, '2022-01-25 17:31:32', '2022-01-25 17:31:32', NULL);
INSERT INTO `reviews` VALUES (24, 15, 23, 8, 4, 'The teacher is very cute!', NULL, '', 15, NULL, '2022-01-25 20:15:35', '2022-01-25 20:15:35', NULL);
INSERT INTO `reviews` VALUES (25, 3, 20, 6, 5, 'very good course', NULL, '', 3, NULL, '2022-01-27 00:41:04', '2022-01-27 00:41:04', NULL);
INSERT INTO `reviews` VALUES (26, 3, 20, 6, 1, 'I can\'t recommend it this course', NULL, '', 3, NULL, '2022-01-27 00:46:58', '2022-01-27 00:46:58', NULL);
INSERT INTO `reviews` VALUES (27, 3, 20, 6, 5, 'I recommend this course', NULL, '', 3, NULL, '2022-01-27 00:49:57', '2022-01-27 00:49:57', NULL);
INSERT INTO `reviews` VALUES (28, 3, 21, 4, 5, 'I recommend it', NULL, '', 3, NULL, '2022-01-27 00:50:35', '2022-01-27 00:50:35', NULL);
INSERT INTO `reviews` VALUES (29, 3, 18, 2, 1, 'not practical enough', 0, '', 3, NULL, '2022-01-27 01:14:03', '2022-01-27 05:18:24', NULL);
INSERT INTO `reviews` VALUES (30, 3, 18, 2, 1, 'Shit course, shit teacher', 1, '', 3, NULL, '2022-01-27 01:20:40', '2022-01-27 05:18:36', '2022-01-27 05:18:36');
INSERT INTO `reviews` VALUES (32, 3, 2, 3, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:11:51', '2022-01-27 08:11:51', NULL);
INSERT INTO `reviews` VALUES (33, 3, 2, 3, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:12:37', '2022-01-27 08:12:37', NULL);
INSERT INTO `reviews` VALUES (34, 3, 2, 18, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:17:09', '2022-01-27 08:17:09', NULL);
INSERT INTO `reviews` VALUES (35, 3, 18, 2, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:18:30', '2022-01-27 08:18:30', NULL);
INSERT INTO `reviews` VALUES (36, 3, 18, 2, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:19:08', '2022-01-27 08:19:08', NULL);
INSERT INTO `reviews` VALUES (37, 3, 18, 2, 4, 'The teacher is good', NULL, '', 1, NULL, '2022-01-27 08:20:25', '2022-01-27 08:20:25', NULL);
INSERT INTO `reviews` VALUES (38, 31, 17, 1, 3, 'So cool!', 1, '', 31, NULL, '2022-01-27 16:42:45', '2022-01-27 16:43:16', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of student_enrolled_courses
-- ----------------------------
INSERT INTO `student_enrolled_courses` VALUES (1, 2, 1, 0, '2022-01-16 14:10:57', '2022-01-16 14:10:57', NULL);
INSERT INTO `student_enrolled_courses` VALUES (2, 3, 1, 0, '2022-01-16 14:11:00', '2022-01-16 14:11:00', NULL);
INSERT INTO `student_enrolled_courses` VALUES (3, 1, 1, 0, '2022-01-16 14:11:05', '2022-01-16 14:11:05', NULL);
INSERT INTO `student_enrolled_courses` VALUES (4, 4, 1, 0, '2022-01-16 14:11:07', '2022-01-16 14:11:07', NULL);
INSERT INTO `student_enrolled_courses` VALUES (5, 4, 3, 0, '2022-01-16 15:11:50', '2022-01-16 15:11:50', NULL);
INSERT INTO `student_enrolled_courses` VALUES (6, 8, 13, 0, '2022-01-25 11:53:59', '2022-01-25 11:53:59', NULL);
INSERT INTO `student_enrolled_courses` VALUES (7, 2, 13, 0, '2022-01-25 23:06:00', '2022-01-25 23:06:00', NULL);
INSERT INTO `student_enrolled_courses` VALUES (8, 1, 13, 0, '2022-01-25 23:06:27', '2022-01-25 23:06:27', NULL);
INSERT INTO `student_enrolled_courses` VALUES (9, 1, 29, 0, '2022-01-27 16:14:22', '2022-01-27 16:14:22', NULL);
INSERT INTO `student_enrolled_courses` VALUES (10, 2, 29, 0, '2022-01-27 16:14:28', '2022-01-27 16:14:28', NULL);

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
  `nRatings` int NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `tutor_courses_CourseId_UserId_unique`(`UserId`, `CourseId`) USING BTREE,
  INDEX `CourseId`(`CourseId`) USING BTREE,
  CONSTRAINT `tutor_courses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tutor_courses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tutor_courses
-- ----------------------------
INSERT INTO `tutor_courses` VALUES (1, 17, 1, 14.99, 4.60, 0, '2022-01-15 12:48:13', '2022-01-27 16:42:45', NULL, 5);
INSERT INTO `tutor_courses` VALUES (2, 18, 2, 5.00, 3.50, 0, '2022-01-15 12:48:13', '2022-01-27 16:04:21', NULL, 8);
INSERT INTO `tutor_courses` VALUES (3, 19, 3, 10.99, 4.00, 0, '2022-01-15 12:48:13', '2022-01-27 16:04:21', NULL, 2);
INSERT INTO `tutor_courses` VALUES (4, 21, 4, 8.00, 5.00, 0, '2022-01-15 12:48:13', '2022-01-27 16:04:21', NULL, 3);
INSERT INTO `tutor_courses` VALUES (5, 21, 5, 14.50, 1.00, 1, '2022-01-15 12:48:13', '2022-01-17 21:13:37', NULL, 0);
INSERT INTO `tutor_courses` VALUES (6, 23, 8, 13.50, 3.67, 0, '2022-01-15 13:01:04', '2022-01-27 16:04:21', NULL, 3);
INSERT INTO `tutor_courses` VALUES (8, 1, 10, 12.50, 4.00, 0, '2022-01-15 14:54:51', '2022-01-27 16:04:21', NULL, 1);
INSERT INTO `tutor_courses` VALUES (10, 20, 6, 15.50, 0.00, 0, '2022-01-16 11:24:27', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (12, 24, 12, 15.50, 0.00, 0, '2022-01-25 10:49:22', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (13, 1, 13, 15.50, 0.00, 0, '2022-01-25 10:52:40', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (14, 1, 14, 10.00, 0.00, 0, '2022-01-26 14:01:47', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (15, 1, 15, 15.00, 0.00, 0, '2022-01-26 14:25:24', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (16, 1, 16, 10.00, 0.00, 0, '2022-01-26 14:26:49', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (17, 1, 17, 10.00, 0.00, 0, '2022-01-26 14:28:26', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (18, 1, 18, 40.00, 4.00, 0, '2022-01-26 14:30:13', '2022-01-27 16:04:21', NULL, 1);
INSERT INTO `tutor_courses` VALUES (19, 1, 19, 10.00, 0.00, 0, '2022-01-26 14:31:23', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (20, 1, 20, 10.00, 0.00, 0, '2022-01-26 14:59:57', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (21, 1, 21, 10.00, 0.00, 0, '2022-01-26 15:08:13', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (22, 1, 22, 10.00, 0.00, 1, '2022-01-26 15:11:44', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (23, 1, 23, 10.00, 0.00, 0, '2022-01-27 03:49:51', '2022-01-27 16:04:21', NULL, 0);
INSERT INTO `tutor_courses` VALUES (24, 32, 24, NULL, 0.00, 0, '2022-01-27 16:26:10', '2022-01-27 16:26:10', NULL, 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_profile_files
-- ----------------------------
INSERT INTO `user_profile_files` VALUES (1, 1, 'Resume', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642291432050-448836138', 'Approved', '2022-01-16 00:03:52', '2022-01-16 00:05:18', NULL);
INSERT INTO `user_profile_files` VALUES (2, 2, 'CV', 'C:\\Data\\Fulda\\Winter_Semester2021\\GDSD\\ProjectGit\\app\\backend\\storage\\profileuploads\\User-1-1642292563197-680390435', 'Approved', '2022-01-16 00:22:43', '2022-01-26 12:42:57', NULL);
INSERT INTO `user_profile_files` VALUES (3, 2, 'TestfilePDF', '/storage/profile_uploads/User-2-1643131326250-914361478.pdf', 'Approved', '2022-01-25 17:22:06', '2022-01-26 13:03:11', NULL);
INSERT INTO `user_profile_files` VALUES (7, 27, 'Randmon', '/storage/profile_uploads/User-27-1643237734809-352546538.txt', 'PendingApproval', '2022-01-26 22:55:34', '2022-01-26 22:57:53', '2022-01-26 22:57:53');
INSERT INTO `user_profile_files` VALUES (8, 27, 'test6.txt', '/storage/profile_uploads/User-27-1643238000618-605400662.function stream() { [native code] }', 'Approved', '2022-01-26 23:00:00', '2022-01-27 16:38:02', NULL);
INSERT INTO `user_profile_files` VALUES (9, 27, 'test7.txt', '/storage/profile_uploads/User-27-1643238000623-4654215.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-26 23:00:50', '2022-01-26 23:00:50');
INSERT INTO `user_profile_files` VALUES (10, 27, 'test2.txt', '/storage/profile_uploads/User-27-1643238000625-863682049.function stream() { [native code] }', 'Approved', '2022-01-26 23:00:00', '2022-01-27 16:38:04', NULL);
INSERT INTO `user_profile_files` VALUES (11, 27, 'test5.txt', '/storage/profile_uploads/User-27-1643238000621-974842933.function stream() { [native code] }', 'PendingApproval', '2022-01-26 23:00:00', '2022-01-27 03:31:01', '2022-01-27 03:31:01');
INSERT INTO `user_profile_files` VALUES (12, 27, 'test4.txt', '/storage/profile_uploads/User-27-1643238000627-450848423.function stream() { [native code] }', 'Approved', '2022-01-26 23:00:00', '2022-01-27 16:38:16', NULL);
INSERT INTO `user_profile_files` VALUES (13, 27, 'test1.txt', '/storage/profile_uploads/User-27-1643238000647-891614591.function stream() { [native code] }', 'Rejected', '2022-01-26 23:00:00', '2022-01-27 16:38:20', NULL);
INSERT INTO `user_profile_files` VALUES (14, 27, 'test3.txt', '/storage/profile_uploads/User-27-1643238000711-492129912.function stream() { [native code] }', 'Rejected', '2022-01-26 23:00:00', '2022-01-27 16:38:23', NULL);
INSERT INTO `user_profile_files` VALUES (15, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643289800197-683886101.txt', 'PendingApproval', '2022-01-27 13:23:20', '2022-01-27 13:36:56', '2022-01-27 13:36:56');
INSERT INTO `user_profile_files` VALUES (16, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643290626833-318950108.txt', 'PendingApproval', '2022-01-27 13:37:06', '2022-01-27 14:03:11', '2022-01-27 14:03:11');
INSERT INTO `user_profile_files` VALUES (17, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643292204119-141324357.txt', 'PendingApproval', '2022-01-27 14:03:24', '2022-01-27 14:11:51', '2022-01-27 14:11:51');
INSERT INTO `user_profile_files` VALUES (18, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643292771240-912118345.txt', 'PendingApproval', '2022-01-27 14:12:51', '2022-01-27 14:48:55', '2022-01-27 14:48:55');
INSERT INTO `user_profile_files` VALUES (19, 27, 'file1.txt', '/storage/profile_uploads/User-27-1643294947647-798237794.txt', 'PendingApproval', '2022-01-27 14:49:07', '2022-01-27 14:49:58', '2022-01-27 14:49:58');
INSERT INTO `user_profile_files` VALUES (20, 27, 'NewFile.txt', '/storage/profile_uploads/User-27-1643295262334-676204899.txt', 'PendingApproval', '2022-01-27 14:54:22', '2022-01-27 14:54:22', NULL);

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
INSERT INTO `user_profiles` VALUES (1, 1, NULL, 1, 'profile_image_1639734254.jpg', 'my_cv_1639734264.pdf', 'I am eight years of experience in Teaching', '2022-01-15 12:48:13', '2022-01-27 14:49:58', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'John', 'Doe', 'johndoe@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1985-05-08', 2, 0, 0, 1, 0, 'I am eight years of experience in Teaching', '2022-01-15 12:48:12', '2022-01-27 15:14:11', NULL, 0);
INSERT INTO `users` VALUES (2, 'Kyler', 'Stark', 'kylerstark@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1990-02-18', 1, 0, 1, 0, 0, NULL, '2022-01-15 12:48:12', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (3, 'Johnny', 'Doh', 'johnnyd@example.com', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 2, 1, 0, 0, 0, NULL, '2022-01-15 12:48:12', '2022-01-15 12:48:12', NULL, 0);
INSERT INTO `users` VALUES (8, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$tLRCbmqr.5tXBJNhAoHbNe0Zvcpj7t.7S6f.vCW.4bIN3ymjPA00O', 0.00, '1995-08-05', 1, 1, 0, 0, 0, NULL, '2022-01-18 18:51:55', '2022-01-18 18:56:24', '2022-01-18 18:56:24', 0);
INSERT INTO `users` VALUES (9, 'Johnny', 'Doh', 'yes41@example.com', '$2a$10$EqOBN6uwtqEPnog9GzL1jug2DxPILxZ5Kqf7H3kJN9zgmNl9Hvkpy', 0.00, '1995-08-05', 1, 1, 0, 0, 0, NULL, '2022-01-18 18:52:47', '2022-01-18 18:52:47', NULL, 0);
INSERT INTO `users` VALUES (10, 'Johnny', 'Doh', 'yes40@example.com', '$2a$10$GIR7kH.k9OMTFmZ0Pl8PieoveuAmjENRBXz50jtzNMoTvqP0RLMZ2', 0.00, '1995-08-05', 1, 1, 0, 0, 0, NULL, '2022-01-19 15:03:17', '2022-01-19 15:03:17', NULL, 0);
INSERT INTO `users` VALUES (11, 'Alexander', 'Wiegel', 'alexander.wiegel@hs-fulda.de', '$2a$10$3Yv.WxW9SGFuUzbdWCrHLueNU.cMxxvm28gWIbmMWy9yHovlNbNFW', 0.00, '1998-08-08', 0, 1, 0, 0, 0, NULL, '2022-01-23 13:16:18', '2022-01-26 15:46:39', '2022-01-26 15:46:39', 0);
INSERT INTO `users` VALUES (12, 'Student', 'User', 'student@hs-fulda.de', '$2a$10$h28SLQbHsKwEg6Y4FUx5auE5rkHn0MjE7AWDGtUqLQJZ9iIEn7Sz6', 0.00, '2000-01-19', 0, 1, 0, 0, 0, NULL, '2022-01-24 02:37:29', '2022-01-26 08:12:58', '2022-01-26 08:12:58', 0);
INSERT INTO `users` VALUES (13, 'Chahat', 'Soni', 'chahat.soni@informatik.hs-fulda.de', '$2a$10$l4vV3D2jMj2YdaNJEiMNk.PejeE/dA2Lxh3rbStdvBnjEPfVCRpO.', 0.00, '2000-01-01', 0, 1, 0, 0, 0, NULL, '2022-01-25 10:49:26', '2022-01-25 10:49:26', NULL, 0);
INSERT INTO `users` VALUES (14, 'Chahat', 'Soni', 'c.s@hs-fulda.de', '$2a$10$dbSESz6HkifOmW2m6YoZ1O.VKeSsyTVxQSOU8ZKmpxq8bX.72BtEy', 0.00, '2222-01-01', 0, 1, 0, 0, 0, NULL, '2022-01-25 11:01:27', '2022-01-25 11:01:27', NULL, 0);
INSERT INTO `users` VALUES (15, 'Chahat', 'Soni', 'deegoldy@informatik.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '2000-02-01', 0, 1, 0, 0, 0, NULL, '2022-01-25 11:04:44', '2022-01-25 11:04:44', NULL, 0);
INSERT INTO `users` VALUES (16, 'Helfried', 'Scholz', 'Helfried.Scholz@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 16:53:57', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (17, 'Ben', 'Ludwig', 'ben.ludwig@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 4.60, '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 16:42:45', NULL, 5);
INSERT INTO `users` VALUES (18, 'Paul', 'Schumacher', 'paul.schumacher@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 3.50, '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 16:04:21', NULL, 8);
INSERT INTO `users` VALUES (19, 'Luca', 'Böhm', 'luca.böhm@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 4.00, '1995-08-05', 2, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 16:04:22', NULL, 2);
INSERT INTO `users` VALUES (20, 'Noah', 'Jäger', 'noah.jäger@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (21, 'Finn', 'Kraus', 'finn.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 5.00, '1995-08-05', 2, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 16:04:22', NULL, 3);
INSERT INTO `users` VALUES (22, 'Elias', 'Kraus', 'elias.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 3, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (23, 'Finn', 'Stein', 'finn.stein@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 4.50, '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-26 08:12:38', '2022-01-26 08:12:38', 0);
INSERT INTO `users` VALUES (24, 'Elias', 'Kraus', 'elias.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 2, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (25, 'Luis', 'Kraus', 'luis.kraus@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 1, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (26, 'Ben', 'Winter', 'ben.winter@ai.hs-fulda.de', '$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy', 0.00, '1995-08-05', 0, 0, 1, 0, 0, NULL, '2022-01-25 17:03:09', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (27, 'Adam', 'Smith', 'adam-smith@ai.hs-fulda.de', '$2a$10$aq9iw2hd1wXtmsRnxOsNNunerbpLAnqoMDBh9z97rPuWKmZRmhTEa', 0.00, '1990-01-01', 1, 0, 1, 0, 0, NULL, '2022-01-26 09:44:45', '2022-01-27 16:04:22', NULL, 2);
INSERT INTO `users` VALUES (28, 'Ziad', 'Khaled', 'zk@hs-fulda.de', '$2a$10$IRi/nffRSY/EtbQQm9b9EuoK2GVD.g22/DJghZUxyhQmmzgxgObre', 0.00, '2001-10-02', 0, 0, 1, 0, 0, NULL, '2022-01-26 20:57:48', '2022-01-27 10:34:53', NULL, 0);
INSERT INTO `users` VALUES (29, 'Maksim', 'Kanushin', 'maksim.kanushin@ai.hs-fulda.de', '$2a$10$L0AfPEc.rAe9X/5wUe2f8.S1sZlxv8BTD5iQilPDuXowYTxw8flJ.', 0.00, '1995-03-01', 0, 1, 0, 0, 0, NULL, '2022-01-27 16:02:44', '2022-01-27 16:02:44', NULL, 0);
INSERT INTO `users` VALUES (30, 'Alexander', 'Wiegel', 'alexander.wiegel@ai.hs-fulda.de', '$2a$10$s03g4dh33SxNNip4SWwyGeSzwN1hcLZEzJq4hx7mD0qwIxYsUYs5e', 0.00, '1998-08-08', 0, 1, 0, 0, 0, NULL, '2022-01-27 16:06:05', '2022-01-27 16:06:05', NULL, 0);
INSERT INTO `users` VALUES (31, 'Maria', 'Schneider', 'maria.schneider@hs-fulda.de', '$2a$10$krzaUp.Ctnd4McFJJDPMo.ocbk0ArN97fMHXfxAfjdDFIkMcy3UfW', 0.00, '1997-08-21', 1, 1, 0, 0, 0, NULL, '2022-01-27 16:14:55', '2022-01-27 16:14:55', NULL, 0);
INSERT INTO `users` VALUES (32, 'RTO', 'RTORTO', 'rto@hs-fulda.de', '$2a$10$2Rjru344fkUuBXLYjhTHYudZB0681v5sHha8b1B8eOawL8mNBS.vq', 0.00, '1960-11-11', 0, 0, 1, 0, 0, NULL, '2022-01-27 16:24:21', '2022-01-27 16:24:21', NULL, 0);

SET FOREIGN_KEY_CHECKS = 1;
