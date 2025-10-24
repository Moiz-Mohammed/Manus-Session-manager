CREATE TABLE `languageProgress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`languageName` varchar(128) NOT NULL,
	`trackName` varchar(64) NOT NULL,
	`status` enum('not-started','in-progress','completed') NOT NULL DEFAULT 'not-started',
	`progress` int NOT NULL DEFAULT 0,
	`completedLessons` int NOT NULL DEFAULT 0,
	`totalLessons` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `languageProgress_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `trackProgress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`trackName` varchar(64) NOT NULL,
	`progress` int NOT NULL DEFAULT 0,
	`completedTopics` int NOT NULL DEFAULT 0,
	`totalTopics` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `trackProgress_id` PRIMARY KEY(`id`)
);
