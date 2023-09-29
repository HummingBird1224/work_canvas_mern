/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.4.27-MariaDB : Database - work_canvas
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`work_canvas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `work_canvas`;

/*Table structure for table `wc_companies` */

DROP TABLE IF EXISTS `wc_companies`;

CREATE TABLE `wc_companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `corporate_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `founder` varchar(255) DEFAULT NULL,
  `foundation_date` varchar(255) DEFAULT NULL,
  `prefecture_id` int(11) DEFAULT NULL,
  `address_main` varchar(255) DEFAULT NULL,
  `address_detail` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `homepage` varchar(255) DEFAULT NULL,
  `invite_id` varchar(255) DEFAULT NULL,
  `representative_director_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_companies` */

insert  into `wc_companies`(`id`,`corporate_name`,`company_name`,`founder`,`foundation_date`,`prefecture_id`,`address_main`,`address_detail`,`facebook`,`twitter`,`instagram`,`homepage`,`invite_id`,`representative_director_name`,`phone_number`,`postal_code`) values 
(1,NULL,'Derjon.LTD',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'20dbe3d20c5d03a7',NULL,NULL,NULL);

/*Table structure for table `wc_features` */

DROP TABLE IF EXISTS `wc_features`;

CREATE TABLE `wc_features` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `insurance` text DEFAULT NULL,
  `social_insurance` enum('0','1') DEFAULT NULL,
  `health_insurance` enum('1','2','3','4','5','6') DEFAULT NULL,
  `full_te` enum('0','1') DEFAULT NULL,
  `full_te_amount` int(255) DEFAULT NULL,
  `part_te` enum('0','1') DEFAULT NULL,
  `part_te_amount` int(255) DEFAULT NULL,
  `vacation` enum('1','2','3') DEFAULT NULL,
  `full_vacation` enum('1','2','3','4') DEFAULT NULL,
  `part_vacation` enum('1','2','3','4') DEFAULT NULL,
  `outsorucing_vacation` enum('1','2','3','4') DEFAULT NULL,
  `paid_holidays` enum('0','1') DEFAULT NULL,
  `summer_holidays` enum('0','1') DEFAULT NULL,
  `summer_days` tinyint(4) DEFAULT NULL,
  `summer_condition` text DEFAULT NULL,
  `winter_holidays` enum('0','1') DEFAULT NULL,
  `winter_days` tinyint(4) DEFAULT NULL,
  `winter_condition` text DEFAULT NULL,
  `online_interview` enum('0','1') DEFAULT NULL,
  `working_hours` text DEFAULT NULL,
  `business_hours` text DEFAULT NULL,
  `w_work` enum('0','1') DEFAULT NULL,
  `w_work_condition` text DEFAULT NULL,
  `multiple_business` enum('0','1') DEFAULT NULL,
  `business_types` text DEFAULT NULL,
  `dormitory` enum('0','1') DEFAULT NULL,
  `dormitory_condition` text DEFAULT NULL,
  `housing_allowance` enum('0','1') DEFAULT NULL,
  `housing_allowance_detail` text DEFAULT NULL,
  `bonus` enum('0','1') DEFAULT NULL,
  `bonus_detail` text DEFAULT NULL,
  `retirement_allowance` enum('0','1') DEFAULT NULL,
  `retirement_allowance_detail` text DEFAULT NULL,
  `childcare_center` enum('0','1') DEFAULT NULL,
  `maternity_vacation` enum('0','1') DEFAULT NULL,
  `maternity_vacation_condition` text DEFAULT NULL,
  `car_commute` enum('0','1') DEFAULT NULL,
  `short_time_working` enum('0','1') DEFAULT NULL,
  `special_salary` text DEFAULT NULL,
  `tour_interview` enum('1','2','3','4','5') DEFAULT NULL,
  `first_interview` enum('1','2','3','4') DEFAULT NULL,
  `new_hiring` text DEFAULT NULL,
  `mid_hiring` text DEFAULT NULL,
  `short_hiring` enum('1','2','3') DEFAULT NULL,
  `license_hiring` enum('0','1') DEFAULT NULL,
  `black_period_hiring` enum('1','2','3') DEFAULT NULL,
  `colorists_hiring` enum('0','1') DEFAULT NULL,
  `assistant_skills` text DEFAULT NULL,
  `part_min_days` tinyint(4) DEFAULT NULL,
  `part_min_hours` tinyint(4) DEFAULT NULL,
  `contract_stylist_hiring` enum('0','1') DEFAULT NULL,
  `cs_nomination_fee` tinyint(4) DEFAULT NULL,
  `cs_free_commission` tinyint(4) DEFAULT NULL,
  `cs_guaranteed_salary` enum('0','1') DEFAULT NULL,
  `cs_guaranteed_salary_condition` text DEFAULT NULL,
  `cs_other_salary` text DEFAULT NULL,
  `cs_average_income` int(255) DEFAULT NULL,
  `cs_drug_costs` enum('0','1') DEFAULT NULL,
  `cs_utility_costs` enum('0','1') DEFAULT NULL,
  `full_stylist_hiring` enum('0','1') DEFAULT NULL,
  `fs_basic_salary` int(255) DEFAULT NULL,
  `fs_nomination_fee` tinyint(4) DEFAULT NULL,
  `fs_free_commission` tinyint(4) DEFAULT NULL,
  `fs_trial` enum('0','1') DEFAULT NULL,
  `fs_trial_months` tinyint(4) DEFAULT NULL,
  `fs_trial_full_employed` enum('0','1') DEFAULT NULL,
  `fs_trial_salary_change` enum('0','1') DEFAULT NULL,
  `fs_added_allowance_detail` text DEFAULT NULL,
  `fs_average_income` int(255) DEFAULT NULL,
  `full_assistant_hiring` enum('0','1') DEFAULT NULL,
  `fa_basic_salary` int(255) DEFAULT NULL,
  `fa_trial` enum('0','1') DEFAULT NULL,
  `fa_trial_months` tinyint(4) DEFAULT NULL,
  `fa_trial_full_employed` enum('0','1') DEFAULT NULL,
  `fa_trial_salary_change` enum('0','1') DEFAULT NULL,
  `fa_increase_salary_detail` text DEFAULT NULL,
  `fa_added_allowance_detail` text DEFAULT NULL,
  `fa_average_income` int(255) DEFAULT NULL,
  `fa_cs_average_income` int(255) DEFAULT NULL,
  `hair_makeup_offer` enum('0','1') DEFAULT NULL,
  `hair_makeup_detail` text DEFAULT NULL,
  `head_spa` enum('0','1') DEFAULT NULL,
  `head_spa_education` text DEFAULT NULL,
  `spanist_work` enum('0','1') DEFAULT NULL,
  `dressing` enum('0','1') DEFAULT NULL,
  `dressing_skill_education` text DEFAULT NULL,
  `shampoo_basin_type` text DEFAULT NULL,
  `photo_session` enum('0','1') DEFAULT NULL,
  `photo_session_detail` text DEFAULT NULL,
  `men_salon_type` enum('1','2','3','4') DEFAULT NULL,
  `part_worker_hiring` enum('0','1') DEFAULT NULL,
  `ps_hourly` int(255) DEFAULT NULL,
  `pa_hourly` int(255) DEFAULT NULL,
  `p_trial` enum('0','1') DEFAULT NULL,
  `p_trial_months` tinyint(4) DEFAULT NULL,
  `p_trial_salary_change` enum('0','1') DEFAULT NULL,
  `p_added_allowance_detail` text DEFAULT NULL,
  `practice_session` enum('0','1') DEFAULT NULL,
  `practice_times` tinyint(4) DEFAULT NULL,
  `business_practice` enum('1','2','3') DEFAULT NULL,
  `ooo_training_offer` enum('0','1') DEFAULT NULL,
  `new_employee_training` enum('0','1') DEFAULT NULL,
  `inexperience_debut_years` tinyint(4) DEFAULT NULL,
  `mid_debut_months` tinyint(4) DEFAULT NULL,
  `lesson_place` enum('0','1') DEFAULT NULL,
  `missing_skill_follow_up` enum('0','1') DEFAULT NULL,
  `missing_follow_up_detail` text DEFAULT NULL,
  `contests_support` enum('0','1') DEFAULT NULL,
  `contests_support_detail` text DEFAULT NULL,
  `hairdresser_working_type` text DEFAULT NULL,
  `customer_service_style` enum('1','2','3') DEFAULT NULL,
  `stylist_average_customers` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_features` */

/*Table structure for table `wc_pay_lists` */

DROP TABLE IF EXISTS `wc_pay_lists`;

CREATE TABLE `wc_pay_lists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conpany_id` int(11) DEFAULT NULL,
  `pay_type` enum('billing','payment') DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `from_to_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_pay_lists` */

/*Table structure for table `wc_payment_banks` */

DROP TABLE IF EXISTS `wc_payment_banks`;

CREATE TABLE `wc_payment_banks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conpany_id` int(11) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `deposit_type` enum('1','2','3') DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `account_holder` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_payment_banks` */

/*Table structure for table `wc_payment_cards` */

DROP TABLE IF EXISTS `wc_payment_cards`;

CREATE TABLE `wc_payment_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conpany_id` int(11) DEFAULT NULL,
  `card_number` int(11) DEFAULT NULL,
  `security_code` int(11) DEFAULT NULL,
  `expired_date` varchar(255) DEFAULT NULL,
  `card_holder_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_payment_cards` */

/*Table structure for table `wc_plans` */

DROP TABLE IF EXISTS `wc_plans`;

CREATE TABLE `wc_plans` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `business_type` enum('美容師','アイリスト','ネイリスト/エステ') DEFAULT NULL,
  `person_type` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `tax_included` enum('0','1') DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_plans` */

/*Table structure for table `wc_prefecture` */

DROP TABLE IF EXISTS `wc_prefecture`;

CREATE TABLE `wc_prefecture` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `en_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_prefecture` */

insert  into `wc_prefecture`(`id`,`name`,`en_name`) values 
(1,'北海道','hokkaido'),
(2,'青森県','aomori'),
(3,'岩手県','iwate'),
(4,'宮城県','miyagi'),
(5,'秋田県','akita'),
(6,'山形県','yamagata'),
(7,'福島県','fukushima'),
(8,'茨城県','ibaraki'),
(9,'栃木県','tochigi'),
(10,'群馬県','gunma'),
(11,'埼玉県','saitama'),
(12,'千葉県','chiba'),
(13,'東京都','tokyo'),
(14,'神奈川県','kanagawa'),
(15,'新潟県','niigata'),
(16,'富山県','toyama'),
(17,'石川県','ishikawa'),
(18,'福井県','fukui'),
(19,'山梨県','yamanashi'),
(20,'長野県','nagano'),
(21,'岐阜県','gifu'),
(22,'静岡県','shizuoka'),
(23,'愛知県','aichi'),
(24,'三重県','mie'),
(25,'滋賀県','shiga'),
(26,'京都府','kyoto'),
(27,'大阪府','osaka'),
(28,'兵庫県','hyogo'),
(29,'奈良県','nara'),
(30,'和歌山県','wakayama'),
(31,'鳥取県','tottori'),
(32,'島根県','shimane'),
(33,'岡山県','okayama'),
(34,'広島県','hiroshima'),
(35,'山口県','yamaguchi'),
(36,'徳島県','tokushima'),
(37,'香川県','kagawa'),
(38,'愛媛県','ehime'),
(39,'高知県','kochi'),
(40,'福岡県','fukuoka'),
(41,'佐賀県','saga'),
(42,'長崎県','nagasaki'),
(43,'熊本県','kumamoto'),
(44,'大分県','oita'),
(45,'宮崎県','miyazaki'),
(46,'鹿児島県','kagoshima'),
(47,'沖縄県','okinawa');

/*Table structure for table `wc_stores` */

DROP TABLE IF EXISTS `wc_stores`;

CREATE TABLE `wc_stores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) DEFAULT NULL,
  `brand_type` varchar(255) DEFAULT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `store_address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_stores` */

/*Table structure for table `wc_users` */

DROP TABLE IF EXISTS `wc_users`;

CREATE TABLE `wc_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','administrator','recruiter') DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `order` int(255) DEFAULT 9999,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wc_users` */

insert  into `wc_users`(`id`,`username`,`email`,`password`,`role`,`company_id`,`order`,`createdAt`,`updatedAt`) values 
(1,'Keita Nonaka','moonriderdev@gmail.com','$2a$10$RlouuXnXScAr9UBTUKjXu.6jhsFC4srJcLp0DbKlIlHBuledLlAdq','administrator',1,9999,'2023-09-28 13:01:57','2023-09-28 13:01:57');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
