import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Company from "../models/Company.js";

dotenv.config();
await connectDB();

export const seedCompanies = async (req, res) => {
    const sample = [
      {
        name: "TechNova",
        industry: "Software",
        headquarters: "Bangalore",
        foundedYear: 2018,
        employees: 120,
        revenue: 25,
        website: "https://technova.example",
        tags: ["AI", "SaaS", "Cloud"],
        isActive: true
      },
      {
        name: "EcoVolt",
        industry: "Renewable Energy",
        headquarters: "Ahmedabad",
        foundedYear: 2015,
        employees: 60,
        revenue: 10,
        website: "https://ecovolt.example",
        tags: ["solar", "renewable"],
        isActive: true
      },
      {
        name: "FinEdge",
        industry: "Fintech",
        headquarters: "Mumbai",
        foundedYear: 2017,
        employees: 80,
        revenue: 18,
        website: "https://finedge.example",
        tags: ["payments", "API", "banking"],
        isActive: true
      },
      {
        name: "HealthPlus",
        industry: "Healthcare",
        headquarters: "Delhi",
        foundedYear: 2012,
        employees: 200,
        revenue: 35,
        website: "https://healthplus.example",
        tags: ["hospital", "medical", "tech"],
        isActive: true
      },
      {
        name: "FoodieX",
        industry: "FoodTech",
        headquarters: "Bangalore",
        foundedYear: 2019,
        employees: 50,
        revenue: 8,
        website: "https://foodiex.example",
        tags: ["delivery", "food", "app"],
        isActive: true
      },
      {
        name: "BuildSmart",
        industry: "Construction",
        headquarters: "Pune",
        foundedYear: 2010,
        employees: 300,
        revenue: 45,
        website: "https://buildsmart.example",
        tags: ["construction", "infra", "tech"],
        isActive: true
      },
      {
        name: "EduNext",
        industry: "EdTech",
        headquarters: "Hyderabad",
        foundedYear: 2020,
        employees: 40,
        revenue: 6,
        website: "https://edunext.example",
        tags: ["education", "learning", "online"],
        isActive: true
      },
      {
        name: "TravelEase",
        industry: "Travel",
        headquarters: "Kolkata",
        foundedYear: 2013,
        employees: 70,
        revenue: 12,
        website: "https://travelease.example",
        tags: ["travel", "booking", "tourism"],
        isActive: true
      },
      {
        name: "AutoDrive",
        industry: "Automobile",
        headquarters: "Chennai",
        foundedYear: 2011,
        employees: 150,
        revenue: 28,
        website: "https://autodrive.example",
        tags: ["cars", "EV", "auto"],
        isActive: true
      },
      {
        name: "GreenFarm",
        industry: "Agriculture",
        headquarters: "Nagpur",
        foundedYear: 2016,
        employees: 35,
        revenue: 5,
        website: "https://greenfarm.example",
        tags: ["organic", "farming", "agri"],
        isActive: true
      },
      {
        name: "CyberSafe",
        industry: "Cybersecurity",
        headquarters: "Bangalore",
        foundedYear: 2014,
        employees: 90,
        revenue: 20,
        website: "https://cybersafe.example",
        tags: ["security", "software", "enterprise"],
        isActive: true
      },
      {
        name: "SmartHome",
        industry: "IoT",
        headquarters: "Pune",
        foundedYear: 2018,
        employees: 60,
        revenue: 15,
        website: "https://smarthome.example",
        tags: ["IoT", "smart devices", "home"],
        isActive: true
      },
      {
        name: "MediCare",
        industry: "Healthcare",
        headquarters: "Mumbai",
        foundedYear: 2015,
        employees: 110,
        revenue: 22,
        website: "https://medicare.example",
        tags: ["hospital", "pharma", "care"],
        isActive: true
      },
      {
        name: "FinTrack",
        industry: "Fintech",
        headquarters: "Delhi",
        foundedYear: 2019,
        employees: 45,
        revenue: 9,
        website: "https://fintrack.example",
        tags: ["investments", "finance", "app"],
        isActive: true
      },
      {
        name: "PlayZone",
        industry: "Gaming",
        headquarters: "Bangalore",
        foundedYear: 2021,
        employees: 25,
        revenue: 4,
        website: "https://playzone.example",
        tags: ["gaming", "mobile", "fun"],
        isActive: true
      },
      {
        name: "LogiTrack",
        industry: "Logistics",
        headquarters: "Chennai",
        foundedYear: 2013,
        employees: 130,
        revenue: 20,
        website: "https://logitrack.example",
        tags: ["logistics", "delivery", "tracking"],
        isActive: true
      },
      {
        name: "BuildPro",
        industry: "Construction",
        headquarters: "Hyderabad",
        foundedYear: 2010,
        employees: 250,
        revenue: 40,
        website: "https://buildpro.example",
        tags: ["construction", "infrastructure", "projects"],
        isActive: true
      },
      {
        name: "FoodMart",
        industry: "FoodTech",
        headquarters: "Bangalore",
        foundedYear: 2017,
        employees: 55,
        revenue: 10,
        website: "https://foodmart.example",
        tags: ["grocery", "delivery", "app"],
        isActive: true
      },
      {
        name: "EduSmart",
        industry: "EdTech",
        headquarters: "Pune",
        foundedYear: 2016,
        employees: 60,
        revenue: 12,
        website: "https://edusmart.example",
        tags: ["education", "online", "learning"],
        isActive: true
      },
      {
        name: "SolarX",
        industry: "Renewable Energy",
        headquarters: "Ahmedabad",
        foundedYear: 2018,
        employees: 40,
        revenue: 7,
        website: "https://solarx.example",
        tags: ["solar", "green", "energy"],
        isActive: true
      }
    ];


try {
  await Company.deleteMany({});
  await Company.insertMany(sample);
  console.log("✅ Seeded successfully");
  process.exit();
} catch (err) {
  console.error("❌ Seed failed:", err);
  process.exit(1);
}
};
