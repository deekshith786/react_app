import { motion } from 'framer-motion';
import './Dashboard.css'


export const Dashboard = () => {

    return (
        <div className="home">            
            <motion.div className="title"                
                initial={{y: -250, opacity:0}}
                animate={{y: -30, opacity:1}}
                transition={{delay:0.5, duration : 0.5 }}
            >Space for you.</motion.div>
            <motion.div className="sub-title"                
                initial={{y: 270, opacity:0}}
                animate={{y: -1, opacity:1}}
                transition={{delay:0.75, duration : 0.5}}
            >Place for you.</motion.div>
        </div>
)};



