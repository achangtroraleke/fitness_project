import React from "react";
import { Flame, Dumbbell, Activity, CalendarCheck } from "lucide-react";
import { Card, CardContent } from "./Card";
import '../styles/Dashboard.css'
import '../styles/Meter.css'
import MyLineChart from "./MyLineChart";

const Dashboard = () => {

    const stats = [
        {
          icon: <Flame />, 
          label: "Calories Burned",
          value: "580 kcal"
        },
        {
          icon: <Dumbbell />, 
          label: "Workout Time",
          value: "45 mins"
        },
        {
          icon: <Activity />, 
          label: "Steps",
          value: "8,400"
        },
        {
          icon: <CalendarCheck />, 
          label: "Consistency",
          value: "6/7 days"
        },
      ];
      
      const recentWorkouts = [
        { date: "April 3", type: "Cardio + Core", duration: "30 mins" },
        { date: "April 2", type: "Full Body Strength", duration: "45 mins" },
        { date: "April 1", type: "Yoga Recovery", duration: "20 mins" },
      ];
  return(
        <div className="dashboard-container">
          <h1 className="dashboard-title">Welcome back, Alex 💪</h1>
    
          <div className="bento-grid">
            <Card className="bento-item bento-span-3x2">
            
              <CardContent>
                <h2 className="section-title">Today's Stats</h2>
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      {stat.icon}
                      <div>

                        <p className="stat-label">{stat.label}</p>
                        <p className="stat-value">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bento-item bento-span-2x1">
                <CardContent>
                    <h2 className="section-title">Daily Steps</h2>
                    <div className="stat-item">
                    <Activity /> 
                    <div>
                        <p className="stat-label">Steps</p>
                        <p className="stat-value">4999</p>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                            </div>
                            <p class="progress-label">70%</p>
                        </div>
                    </div>
  
                </CardContent>
            </Card>
    
            <Card className="bento-item bento-span-2x1">
              <CardContent>
                <h2 className="section-title">Recent Workouts</h2>
                <div className="workout-list">
                  {recentWorkouts.map((workout, idx) => (
                    <div key={idx} className="workout-item">
                      <span className="workout-type">{workout.type}</span>
                      <span className="workout-meta">{workout.date} - {workout.duration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
    
            <Card className="bento-item bento-span-3x2">
              <CardContent>
                <h2 className="section-title">Weight Progress</h2>
                {/* <ul className="goal-list">
                  <li>✅ Drink 2L water</li>
                  <li>✅ Finish workout</li>
                  <li>⬜ Get 8 hrs sleep</li>
                </ul> */}
                <MyLineChart/>
              </CardContent>
            </Card>
    
            <Card className="bento-item bento-span-2x1">
              <CardContent>
                <h2 className="section-title">Motivation</h2>
                <p className="motivation-text">
                  "Push yourself because no one else is going to do it for you."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
};

export default Dashboard;