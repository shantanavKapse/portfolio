'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Scalable Microservices E-commerce Platform',
							description: 'Architected and deployed a modular e-commerce backend supporting high transaction volumes, real-time analytics, and seamless scaling.',
							details: [
								'Designed isolated microservices for catalog, orders, users, payments, and recommendations',
								'Containerized services with Docker and orchestrated deployment using Kubernetes',
								'Integrated asynchronous task processing with Celery and built event-driven flows via Apache Kafka',
								'Implemented advanced monitoring, centralized logging, and auto-healing features for 99.99% uptime'
							],
							tech: ['Kubernetes', 'Docker', ' Kafka', 'Celery', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
						},
						{
							title: 'Cloud-Native File Management System',
							description: 'Engineered a robust backend solution for multi-user file uploads, secure cloud storage, versioning, and real-time notifications.',
							details: [
								'Automated file upload, access management, and version control with granular permissions',
								'Integrated with AWS S3, Google Cloud Storage, and Azure Blob for scalable cloud storage',
								'Leveraged serverless functions and messaging queues for background processing and notifications',
								'Implemented file encryption, metadata tagging, and audit logging for compliance and traceability'
							],
							tech: ['FastAPI', 'AWS S3', 'Google Cloud Storage', 'Azure Blob', 'RabbitMQ', 'Python', 'Docker'],
						},
						{
							title: 'Real-time Fraud Detection System for Financial Transactions',
							description: 'Developed and deployed a low-latency machine learning system to detect fraudulent transactions in real-time, reducing false positives and financial losses for a large-scale payment gateway.',
							details: [
								'Engineered end-to-end ML pipeline from data ingestion to deployment, to process over a million transactions/day',
								'Implemented advanced feature engineering for behavioral patterns, device fingerprints, and geolocation anomalies',
								'Trained ensemble models (XGBoost, LightGBM) with Bayesian hyperparameter optimization for improved precision-recall tradeoff',
								'Deployed models as scalable microservices with REST APIs, enabling sub-100ms inference latency',
								// 'Integrated model drift monitoring, automated retraining triggers, and A/B testing framework for continuous improvement'
							],
							tech: ['Python', 'Scikit-learn', 'LightGBM', 'XGBoost', 'FastAPI', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'MLflow', 'Prometheus', 'Grafana'],
						}
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
