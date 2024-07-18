import React from 'react';
import workflowdata from '../../src/Data/workflow.json';
import { motion } from "framer-motion";




const Workflow = () => {
    return (
        <>
            <div className='workflow'>
                <motion.div initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} className='main-workflow'>
                    <div className="workflow-div">
                        <p>Beste diensten in zijn klasse</p>
                        <h2>Ons Proces</h2>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="workflow-box">
                    {workflowdata.map(item => (
                        <div key={item.id} className="workflow-content">
                            <div className="icon">   <img src={item.icon} alt={item.title} aria-hidden='true' /></div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default Workflow;
