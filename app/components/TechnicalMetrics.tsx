'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
  <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
    Impact & Achievements
  </motion.h2>

  <div className="grid grid-cols-1 gap-12">
    {/* System Performance */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
        >
          <h4 className="text-lg font-semibold text-gray-300">Backend Optimization</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Improved API latency by up to 60% across multiple products</li>
            <li>• Scaled backend systems to consistently handle 1M+ requests/day</li>
            <li>• Increased application uptime to 99.99% through improved monitoring and failover strategies</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
        >
          <h4 className="text-lg font-semibold text-gray-300">Database & Data Management</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Reduced database query times by 70% via schema refactoring and indexing</li>
            <li>• Implemented robust disaster recovery and backup solutions across systems</li>
            <li>• Led data migration projects ensuring zero data loss and zero downtime</li>
          </ul>
        </motion.div>
      </div>
    </div>

    {/* Infrastructure & DevOps */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
        >
          <h4 className="text-lg font-semibold text-gray-300">Cloud & Automation</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Migrated workloads to AWS/Azure, reducing operational costs by 30%</li>
            <li>• Automated deployment pipelines, achieving zero-downtime releases</li>
            <li>• Standardized monitoring and alerting using Grafana and Prometheus</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
        >
          <h4 className="text-lg font-semibold text-gray-300">Security & Reliability</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Implemented security best practices, reducing vulnerabilities by 35%</li>
            <li>• Enforced role-based access controls at scale</li>
            <li>• Achieved 99.9% incident response SLA with automated recovery</li>
          </ul>
        </motion.div>
      </div>
    </div>

    {/* Development & Leadership */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
        >
          <h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Mentored and onboarded 5+ junior developers</li>
            <li>• Led cross-functional teams in delivering high-impact features</li>
            <li>• Fostered a culture of code quality and consistent documentation</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
        >
          <h4 className="text-lg font-semibold text-gray-300">Innovation & Problem Solving</h4>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>• Piloted automation initiatives saving 200+ monthly engineering hours</li>
            <li>• Introduced code review and CI policies improving test coverage to above 90%</li>
            <li>• Developed POCs for new tech adoption (e.g., serverless, event-driven architecture)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </div>
</div>

		</section>
	);
}
