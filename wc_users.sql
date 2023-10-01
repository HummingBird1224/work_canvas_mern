/*
 Navicat Premium Data Transfer

 Source Server         : PostgreSQL1
 Source Server Type    : PostgreSQL
 Source Server Version : 150003
 Source Host           : localhost:5432
 Source Catalog        : work_canvas
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150003
 File Encoding         : 65001

 Date: 30/09/2023 22:01:26
*/


-- ----------------------------
-- Table structure for wc_users
-- ----------------------------
DROP TABLE IF EXISTS "public"."wc_users";
CREATE TABLE "public"."wc_users" (
  "id" "pg_catalog"."int4" NOT NULL DEFAULT nextval('wc_users_id_seq'::regclass),
  "username" "pg_catalog"."varchar" COLLATE "pg_catalog"."default",
  "email" "pg_catalog"."varchar" COLLATE "pg_catalog"."default",
  "password" "pg_catalog"."varchar" COLLATE "pg_catalog"."default",
  "role" "public"."enum_wc_users_role" DEFAULT 'user'::enum_wc_users_role,
  "company_id" "pg_catalog"."int4",
  "order" "pg_catalog"."int4" DEFAULT 9999,
  "createdAt" "pg_catalog"."timestamptz" NOT NULL,
  "updatedAt" "pg_catalog"."timestamptz" NOT NULL
)
;

-- ----------------------------
-- Records of wc_users
-- ----------------------------
INSERT INTO "public"."wc_users" VALUES (1, 'Keita Nonaka', 'moonriderdev@gmail.com', '$2a$10$RlouuXnXScAr9UBTUKjXu.6jhsFC4srJcLp0DbKlIlHBuledLlAdq', 'administrator', 2, 9999, '2023-09-30 21:17:05+02', '2023-09-30 21:17:11+02');
INSERT INTO "public"."wc_users" VALUES (2, 'dev', 'admin@gmail.com', '$2a$10$o16U6DxkUX17FfjRKinz7uBa1r5iRoOgL3vv2wBN9jDA4NN0VXlFS', 'recruiter', 2, 9999, '2023-09-30 21:17:57+02', '2023-09-30 21:18:00+02');

-- ----------------------------
-- Primary Key structure for table wc_users
-- ----------------------------
ALTER TABLE "public"."wc_users" ADD CONSTRAINT "wc_users_pkey" PRIMARY KEY ("id");
