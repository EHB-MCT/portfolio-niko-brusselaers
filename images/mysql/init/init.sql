

CREATE TABLE IF NOT EXISTS `rooms` (
  `id` bigint NOT NULL,
  `roomName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `sensorData` (
  `id` bigint NOT NULL,
  `room` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sensorDevice` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Value` bigint NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roomName` (`roomName`(255));

--
-- Indexes for table `sensorData`
--
ALTER TABLE `sensorData`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sensorData`
--
ALTER TABLE `sensorData`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1595;
COMMIT;
