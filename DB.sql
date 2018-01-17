CREATE DATABASE  IF NOT EXISTS `MrBreak` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `MrBreak`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: MrBreak
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `LineasVenta`
--

DROP TABLE IF EXISTS `LineasVenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LineasVenta` (
  `idLineaVenta` int(11) NOT NULL,
  `idVenta` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idLineaVenta`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LineasVenta`
--

LOCK TABLES `LineasVenta` WRITE;
/*!40000 ALTER TABLE `LineasVenta` DISABLE KEYS */;
INSERT INTO `LineasVenta` VALUES (16,1,29,1,79.67),(15,1,35,1,90.68),(14,1,30,1,2.62),(13,3,6,6,15.50),(12,3,5,5,15.50),(11,3,4,4,15.50),(10,3,3,3,15.50),(9,3,2,2,15.50),(8,3,1,1,15.50),(7,2,36,1,99.50),(6,2,35,2,15.50),(5,2,34,3,15.50),(4,2,33,4,15.50),(3,2,32,5,15.50),(2,2,31,6,15.50),(1,1,1,1,15.50),(17,2,23,1,32.82),(18,2,4,2,22.01),(19,2,5,1,22.35),(20,1,4,3,66.18),(21,2,1,1,19.02),(22,2,2,1,83.11),(23,2,7,1,91.24),(24,2,8,1,4.49),(25,3,36,1,33.33),(26,3,34,1,54.70),(27,1,23,1,44.41),(28,1,24,1,32.47),(29,2,36,3,33.33),(30,1,36,1,33.33),(31,1,36,1,33.33),(32,1,35,1,52.42),(33,1,36,2,33.33),(34,1,36,1,33.33),(35,1,36,1,33.33),(36,1,36,1,33.33),(37,2,36,1,33.33),(38,3,36,1,33.33),(39,3,35,1,78.57),(40,3,29,1,73.42),(41,4,30,1,49.14),(42,4,29,1,76.85),(43,4,35,1,58.31),(44,4,36,1,33.33),(45,5,36,1,33.33),(46,5,29,1,29.70),(47,5,30,1,88.80),(48,5,35,1,14.32),(49,1,1,1,55.76),(50,1,2,1,17.91),(51,1,3,1,76.49),(52,1,4,1,17.40),(53,2,36,1,33.33),(54,2,35,1,96.15),(55,2,29,1,83.37),(56,2,30,1,47.09),(57,1,30,1,98.93),(58,1,29,1,14.98),(59,1,23,1,11.40),(60,1,23,1,36.42),(61,1,17,1,11.48),(62,1,24,1,31.53),(63,2,36,1,33.33),(64,2,35,1,14.89),(65,2,29,1,86.06),(66,2,30,1,30.65),(67,2,24,1,39.60),(68,2,23,1,65.81),(69,2,17,1,37.94),(70,3,29,1,13.55),(71,3,30,1,73.04),(72,3,36,1,33.33),(73,4,24,1,21.09),(74,5,30,1,79.09),(75,6,36,1,33.33),(76,6,35,1,41.01),(77,6,29,1,16.56),(78,6,30,1,70.18),(79,6,24,1,12.63),(80,6,23,1,62.88),(81,7,36,1,33.33),(82,7,35,1,86.11),(83,7,29,1,71.05),(84,8,24,1,57.17),(85,9,36,1,33.33),(86,9,35,1,41.63),(87,9,30,1,93.50),(88,10,36,2,33.33),(89,10,35,1,93.85),(90,10,29,1,48.98),(91,10,30,1,68.22),(92,11,30,1,71.60),(93,11,29,1,68.71),(94,12,18,1,82.17),(95,12,24,1,26.28),(96,13,36,1,33.33),(97,13,34,1,85.76),(98,13,29,1,17.33),(99,14,36,1,33.33),(100,14,35,1,13.30),(101,14,29,1,22.42),(102,14,30,1,39.99),(103,15,36,1,33.33),(104,16,36,1,33.33),(105,16,35,1,1.33),(106,16,30,1,15.48),(107,17,36,1,33.33),(108,17,35,1,63.35),(109,17,29,1,30.54),(110,17,30,1,2.98),(111,18,23,1,70.59),(112,19,36,1,33.33),(113,19,35,1,50.24),(114,19,29,1,42.92),(115,19,30,1,63.16),(116,20,36,1,33.33),(117,21,23,1,18.58),(118,22,36,1,33.33),(119,23,23,1,78.82),(120,23,24,1,72.83),(121,24,36,1,33.33),(122,25,35,1,38.51),(123,26,23,1,32.72),(124,27,18,3,69.35),(125,28,36,1,33.33),(126,28,35,1,77.99),(127,29,18,1,51.42),(128,30,12,1,6.60),(129,31,30,1,54.68),(130,31,24,1,30.76),(131,32,18,1,19.94),(132,32,24,1,76.77),(133,33,36,1,33.33),(134,33,35,1,86.59),(135,34,36,1,33.33),(136,35,36,1,33.33),(137,35,30,1,35.97),(138,36,23,1,13.37),(139,36,29,1,78.65);
/*!40000 ALTER TABLE `LineasVenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ventas`
--

DROP TABLE IF EXISTS `Ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ventas` (
  `idVenta` int(11) NOT NULL,
  `idCarrito` int(11) NOT NULL,
  `idVendedor` int(11) NOT NULL,
  `montoTotal` decimal(10,2) NOT NULL,
  `fechaVenta` timestamp NOT NULL,
  `fechaSincronizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idVenta`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ventas`
--

LOCK TABLES `Ventas` WRITE;
/*!40000 ALTER TABLE `Ventas` DISABLE KEYS */;
INSERT INTO `Ventas` VALUES (5,1,1,79.09,'2018-01-14 18:51:08','2018-01-14 18:51:12'),(4,1,1,21.09,'2018-01-14 18:51:10','2018-01-14 18:51:12'),(3,1,1,119.92,'2018-01-14 18:51:06','2018-01-14 18:51:12'),(2,1,1,308.28,'2018-01-14 18:46:40','2018-01-14 18:46:47'),(1,1,1,79.43,'2018-01-14 18:46:44','2018-01-14 18:46:47'),(6,1,1,236.59,'2018-01-14 18:55:11','2018-01-14 18:55:19'),(7,1,1,190.49,'2018-01-14 18:55:18','2018-01-14 18:55:19'),(8,1,1,57.17,'2018-01-14 18:57:53','2018-01-14 18:57:55'),(9,1,1,168.46,'2018-01-14 18:58:19','2018-01-14 18:58:22'),(10,1,1,277.71,'2018-01-14 19:00:48','2018-01-14 19:00:54'),(11,1,1,140.31,'2018-01-14 19:00:52','2018-01-14 19:00:54'),(12,1,1,108.45,'2018-01-14 19:05:34','2018-01-14 19:05:36'),(13,1,1,136.42,'2018-01-14 19:05:32','2018-01-14 19:05:36'),(14,1,1,109.04,'2018-01-14 19:09:14','2018-01-14 19:09:16'),(15,1,1,33.33,'2018-01-15 14:11:39','2018-01-15 14:19:30'),(16,1,1,50.14,'2018-01-15 14:19:50','2018-01-15 14:19:57'),(17,1,1,130.20,'2018-01-15 14:44:38','2018-01-15 14:44:40'),(18,1,1,70.59,'2018-01-15 14:45:23','2018-01-15 14:45:26'),(19,1,1,189.65,'2018-01-15 14:45:22','2018-01-15 14:45:26'),(20,1,1,33.33,'2018-01-15 15:07:37','2018-01-15 15:07:41'),(21,1,1,18.58,'2018-01-15 15:07:40','2018-01-15 15:07:41'),(22,1,1,33.33,'2018-01-15 15:08:25','2018-01-15 15:08:30'),(23,1,1,151.65,'2018-01-15 15:08:27','2018-01-15 15:08:30'),(24,1,1,33.33,'2018-01-15 15:09:33','2018-01-15 15:10:03'),(25,1,1,38.51,'2018-01-15 15:09:39','2018-01-15 15:10:03'),(26,1,1,32.72,'2018-01-15 15:09:41','2018-01-15 15:10:03'),(27,1,1,208.05,'2018-01-15 15:11:07','2018-01-15 15:11:11'),(28,1,1,111.32,'2018-01-15 15:11:04','2018-01-15 15:11:11'),(29,1,1,51.42,'2018-01-15 15:11:43','2018-01-15 15:12:03'),(30,1,1,6.60,'2018-01-15 15:11:45','2018-01-15 15:12:03'),(31,1,1,85.44,'2018-01-15 18:47:40','2018-01-15 18:48:15'),(32,1,1,96.71,'2018-01-15 18:47:38','2018-01-15 18:48:15'),(33,1,1,119.92,'2018-01-15 18:47:36','2018-01-15 18:48:15'),(34,1,1,33.33,'2018-01-15 18:49:21','2018-01-15 18:49:25'),(35,1,1,69.30,'2018-01-15 18:49:35','2018-01-15 18:49:40'),(36,1,1,92.02,'2018-01-15 18:49:38','2018-01-15 18:49:40');
/*!40000 ALTER TABLE `Ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'MrBreak'
--

--
-- Dumping routines for database 'MrBreak'
--
/*!50003 DROP PROCEDURE IF EXISTS `venta_nueva` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `venta_nueva`(vIdCarrito INT, vIdVendedor INT, vMonto DECIMAL(10,2), vCadena VARCHAR(1000), vFechaVenta TIMESTAMP)
PROC: BEGIN
	/*
    Procedimiento que permite dar de alta una venta a partir de sus Lineas de Venta, contenidas en pLineas.
    Formato de pLineas: idItem|cantidad|precio*
    El operador '|' se utiliza para separar los atributos de un Item.
    El operador '*' se utiliza para separar las Lineas de Venta.
    Devuelve el 'OK' mas el id de la nueva venta en Mensaje.
    */
    -- Declaración de variabless
    DECLARE totalSP DECIMAL(10,2);/*calculamos el total aqui en el SP*/
    DECLARE vIdVenta INT;
    DECLARE lvIdLineaVenta INT;
    DECLARE aux VARCHAR(50);
    DECLARE pIdProducto INT;
    DECLARE cantidad INT;
    DECLARE pPrecioUnitario DECIMAL(10,2);    
    
    -- Manejo de errores
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
		BEGIN
			SHOW ERRORS;
			SELECT 0 as codigo, 'Error en la transacción.' mensaje;
            ROLLBACK;
		END;
	-- Control de parámetros vacíos
    IF (vCadena IS NULL OR vCadena = '') THEN
		SELECT 0 as codigo, 'Debe ingresar productos a la venta.' mensaje;
        LEAVE PROC;
	END IF;
    
    SET autocommit=0;
    
    START TRANSACTION;
		SET vIdVenta = 1 + (SELECT COALESCE(MAX(idVenta),0) FROM ventas);
		INSERT INTO ventas VALUES (vIdVenta,vIdCarrito,vIdVendedor,vMonto,vFechaVenta,CURRENT_TIMESTAMP);
        
    SET totalSP=0;    
        LAZO : LOOP
			-- Obtengo Linea de Venta
            SET aux = SUBSTRING_INDEX(vCadena,'*',1);
            -- Obtengo idProducto de Linea de Venta
            SET pIdProducto=  SUBSTRING_INDEX(aux,'|',1);
            -- Elimino idProducto de Linea de Venta
            SET aux = RIGHT(aux,CHAR_LENGTH(aux)-CHAR_LENGTH(SUBSTRING_INDEX(aux,'|',1))-1);
            -- Obtengo cantidad de Linea de Venta
            SET cantidad = SUBSTRING_INDEX(aux,'|',1); 
             
             SET aux = RIGHT(aux,CHAR_LENGTH(aux)-CHAR_LENGTH(SUBSTRING_INDEX(aux,'|',1))-1);
            -- Obtengo cantidad de Linea de Venta
            SET pPrecioUnitario = SUBSTRING_INDEX(aux,'|',1);
			
            IF (cantidad <= 0) THEN
				SELECT 0 as codigo, 'La cantidad no puede ser menor o igual que cero.' mensaje;
                ROLLBACK;
                LEAVE PROC;
			END IF;
            
            -- Alta en LineasVenta
            SET lvIdLineaVenta = 1 + (SELECT COALESCE(MAX(idLineaVenta),0) FROM lineasventa);
            INSERT INTO lineasventa VALUES (lvIdLineaVenta,vIdVenta,pIdProducto,cantidad,pPrecioUnitario);
			
            -- calculamos total SP
            SET totalSP = totalSP+pPrecioUnitario*cantidad;
            
            -- Elimino Linea de Venta de pLineas
			SET aux = SUBSTRING_INDEX(vCadena,'*',1);    
			SET vCadena = RIGHT(vCadena,CHAR_LENGTH(vCadena) - CHAR_LENGTH(aux));
			SET vCadena = RIGHT(vCadena,CHAR_LENGTH(vCadena)-1);
            
            -- Condición de salida
			IF (vCadena = '' OR vCadena = '*') THEN
				LEAVE LAZO;
			END IF;
		END LOOP LAZO;
    
	SELECT vIdVenta AS codigo, 'Venta creada con exito.' mensaje;
    COMMIT;    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-16 15:42:50
