-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pshchallenge
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `player_player`
--

DROP TABLE IF EXISTS `player_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_player` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) NOT NULL,
  `profile_image` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_player`
--

LOCK TABLES `player_player` WRITE;
/*!40000 ALTER TABLE `player_player` DISABLE KEYS */;
INSERT INTO `player_player` VALUES (45,'organicbird102','https://randomuser.me/api/portraits/thumb/men/57.jpg'),(46,'angryostrich198','https://randomuser.me/api/portraits/thumb/women/39.jpg'),(47,'bigladybug924','https://randomuser.me/api/portraits/thumb/women/59.jpg'),(48,'sadleopard683','https://randomuser.me/api/portraits/thumb/men/47.jpg'),(49,'bluezebra172','https://randomuser.me/api/portraits/thumb/women/42.jpg'),(50,'blueelephant819','https://randomuser.me/api/portraits/thumb/men/9.jpg'),(51,'bigelephant539','https://randomuser.me/api/portraits/thumb/men/66.jpg'),(52,'lazypanda912','https://randomuser.me/api/portraits/thumb/women/5.jpg'),(53,'whitebird127','https://randomuser.me/api/portraits/thumb/men/44.jpg'),(54,'lazylion244','https://randomuser.me/api/portraits/thumb/men/96.jpg'),(55,'angrydog801','https://randomuser.me/api/portraits/thumb/women/36.jpg'),(56,'purpleswan711','https://randomuser.me/api/portraits/thumb/men/67.jpg'),(57,'ticklishsnake328','https://randomuser.me/api/portraits/thumb/women/46.jpg'),(58,'lazygoose661','https://randomuser.me/api/portraits/thumb/women/22.jpg'),(59,'angrybutterfly118','https://randomuser.me/api/portraits/thumb/women/61.jpg'),(60,'bigpanda414','https://randomuser.me/api/portraits/thumb/women/91.jpg'),(61,'greenfish398','https://randomuser.me/api/portraits/thumb/men/34.jpg'),(62,'tinywolf243','https://randomuser.me/api/portraits/thumb/men/30.jpg'),(63,'brownrabbit893','https://randomuser.me/api/portraits/thumb/women/10.jpg'),(64,'heavyswan763','https://randomuser.me/api/portraits/thumb/women/9.jpg'),(65,'reddog771','https://randomuser.me/api/portraits/thumb/men/66.jpg'),(66,'ticklishfish395','https://randomuser.me/api/portraits/thumb/women/62.jpg'),(67,'redpeacock415','https://randomuser.me/api/portraits/thumb/men/97.jpg'),(68,'purplezebra396','https://randomuser.me/api/portraits/thumb/women/19.jpg'),(69,'bluekoala611','https://randomuser.me/api/portraits/thumb/men/74.jpg'),(70,'goldenkoala922','https://randomuser.me/api/portraits/thumb/women/26.jpg'),(71,'whiteelephant841','https://randomuser.me/api/portraits/thumb/men/50.jpg'),(72,'bluesnake916','https://randomuser.me/api/portraits/thumb/men/87.jpg'),(73,'browngorilla423','https://randomuser.me/api/portraits/thumb/women/28.jpg'),(74,'ticklishostrich964','https://randomuser.me/api/portraits/thumb/women/19.jpg'),(75,'goldenmeercat273','https://randomuser.me/api/portraits/thumb/women/94.jpg'),(76,'orangemeercat385','https://randomuser.me/api/portraits/thumb/men/35.jpg'),(77,'orangeleopard213','https://randomuser.me/api/portraits/thumb/women/48.jpg'),(78,'greenpeacock251','https://randomuser.me/api/portraits/thumb/women/85.jpg'),(79,'lazypanda797','https://randomuser.me/api/portraits/thumb/men/58.jpg'),(80,'brownfrog317','https://randomuser.me/api/portraits/thumb/women/15.jpg'),(81,'whitesnake315','https://randomuser.me/api/portraits/thumb/men/65.jpg'),(82,'blackpeacock599','https://randomuser.me/api/portraits/thumb/women/43.jpg'),(83,'bigleopard361','https://randomuser.me/api/portraits/thumb/men/83.jpg'),(84,'brownmouse673','https://randomuser.me/api/portraits/thumb/men/29.jpg'),(85,'lazydog332','https://randomuser.me/api/portraits/thumb/women/38.jpg'),(86,'beautifulswan190','https://randomuser.me/api/portraits/thumb/men/52.jpg'),(87,'goldenkoala754','https://randomuser.me/api/portraits/thumb/women/38.jpg'),(88,'sadkoala501','https://randomuser.me/api/portraits/thumb/women/38.jpg'),(89,'goldenmouse836','https://randomuser.me/api/portraits/thumb/women/12.jpg'),(90,'orangewolf117','https://randomuser.me/api/portraits/thumb/men/42.jpg'),(91,'angrygorilla947','https://randomuser.me/api/portraits/thumb/women/15.jpg'),(92,'heavykoala726','https://randomuser.me/api/portraits/thumb/women/42.jpg'),(93,'beautifulbird358','https://randomuser.me/api/portraits/thumb/men/33.jpg'),(94,'crazyzebra840','https://randomuser.me/api/portraits/thumb/women/75.jpg'),(95,'sadgorilla267','https://randomuser.me/api/portraits/thumb/men/96.jpg'),(96,'heavygorilla462','https://randomuser.me/api/portraits/thumb/women/32.jpg'),(97,'brownlion638','https://randomuser.me/api/portraits/thumb/men/64.jpg'),(98,'brownladybug402','https://randomuser.me/api/portraits/thumb/women/19.jpg'),(99,'greenmeercat362','https://randomuser.me/api/portraits/thumb/women/25.jpg'),(100,'whitekoala562','https://randomuser.me/api/portraits/thumb/men/17.jpg'),(101,'whitebutterfly647','https://randomuser.me/api/portraits/thumb/men/7.jpg'),(102,'bigfish946','https://randomuser.me/api/portraits/thumb/women/23.jpg'),(103,'blackbutterfly237','https://randomuser.me/api/portraits/thumb/women/87.jpg'),(104,'organicwolf833','https://randomuser.me/api/portraits/thumb/men/37.jpg'),(105,'ticklishfish695','https://randomuser.me/api/portraits/thumb/women/20.jpg'),(106,'happytiger377','https://randomuser.me/api/portraits/thumb/men/38.jpg'),(107,'angryfish688','https://randomuser.me/api/portraits/thumb/women/77.jpg'),(108,'greenleopard697','https://randomuser.me/api/portraits/thumb/women/14.jpg'),(109,'heavyelephant145','https://randomuser.me/api/portraits/thumb/men/95.jpg'),(110,'brownfrog203','https://randomuser.me/api/portraits/thumb/men/82.jpg'),(111,'whitedog273','https://randomuser.me/api/portraits/thumb/men/57.jpg'),(112,'organicladybug817','https://randomuser.me/api/portraits/thumb/men/47.jpg'),(113,'bigtiger900','https://randomuser.me/api/portraits/thumb/women/40.jpg'),(114,'whitemouse533','https://randomuser.me/api/portraits/thumb/men/15.jpg'),(115,'blackmouse874','https://randomuser.me/api/portraits/thumb/women/11.jpg'),(116,'lazydog444','https://randomuser.me/api/portraits/thumb/men/36.jpg'),(117,'heavyfrog109','https://randomuser.me/api/portraits/thumb/women/42.jpg'),(118,'beautifulkoala242','https://randomuser.me/api/portraits/thumb/women/33.jpg'),(119,'purplemeercat590','https://randomuser.me/api/portraits/thumb/men/28.jpg'),(120,'blueladybug974','https://randomuser.me/api/portraits/thumb/women/27.jpg'),(121,'yellowsnake911','https://randomuser.me/api/portraits/thumb/men/90.jpg'),(122,'blackpanda159','https://randomuser.me/api/portraits/thumb/women/33.jpg'),(123,'bigdog155','https://randomuser.me/api/portraits/thumb/women/6.jpg'),(124,'smallbutterfly367','https://randomuser.me/api/portraits/thumb/women/69.jpg'),(125,'browntiger908','https://randomuser.me/api/portraits/thumb/men/28.jpg'),(126,'redtiger621','https://randomuser.me/api/portraits/thumb/women/23.jpg'),(127,'yellowmeercat907','https://randomuser.me/api/portraits/thumb/men/90.jpg'),(128,'heavymeercat656','https://randomuser.me/api/portraits/thumb/men/16.jpg');
/*!40000 ALTER TABLE `player_player` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-01 13:58:50
