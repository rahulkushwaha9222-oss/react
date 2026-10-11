import React from 'react'
import { Bookmark, Car } from 'lucide-react'
import Card from './Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://ts1.mm.bing.net/th?id=OIP.KQeUzJ4a2lwF-sxRdmWNfQHaHa&pid=15.1",
      companyName: "Google",
      posted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$45/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://ts3.mm.bing.net/th?id=OIP.dndhmFc559rrXNAjPWGBeQHaHa&pid=15.1",
      companyName: "Microsoft",
      posted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png",
      companyName: "Amazon",
      posted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$42/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/024/273/768/original/meta-logo-transparent-free-png.png",
      companyName: "Meta",
      posted: "2 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$50/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/%24s_!G1lk!%2Cf_auto%2Cq_auto:good%2Cfl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      posted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$40/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      posted: "4 days ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://logodownload.org/wp-content/uploads/2017/04/adobe-logo-0.png",
      companyName: "Adobe",
      posted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$48/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://ts3.mm.bing.net/th?id=OIP.Lrxsd7qE1xlNSo9qczRXHgHaHa&pid=15.1",
      companyName: "Spotify",
      posted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$32/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://ts4.mm.bing.net/th?id=OIP.QanMuhJkmsTalgnfzb2JUgHaEK&pid=15.1",
      companyName: "IBM",
      posted: "3 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$36/hour",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/521324/App-Icon-1200x1200-salesforce.png",
      companyName: "Salesforce",
      posted: "5 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className='parents'>

      {jobOpenings.map(function (elem, inx) {
        return <div key={inx}>
          <Card companyName={elem.companyName} brandLogo={elem.brandLogo} posted={elem.posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>

      })}

    </div>
  )
}

export default App