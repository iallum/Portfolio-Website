## Data Science Consulting for Perpetual
*Winter 2023*

Language: Python

#### Summary
* Provided data science consulting for a non-profit organization Perpetual
* Utilized Google and Yelp API data to determine foodware-using locations
* Utilized city-wide parcel data to determine residential and office locations
* Used weighted K-means clustering to determine for distribution and collection points for reusable foodware
* Presented output to Perpetual staff

#### Context
For one quarter my senior year at UChicago, I worked with of three other classmates assisting the non-profit organization [Perpetual](https://www.perpetualuse.org/) utilizing data science. Perpetual aims to reduce plastic waste within the food industry by introducing city-wide systems of reusable foodware. In these systems, business can sell takeout and packaged food products in reusable, rather than disposable, containers. These containers are later be returned by consumers in one of the designated collection points across the city. The foodware containers are then collected, washed, and delivered to distribution points for businesses to collect and reuse once more.

#### My Work
When Perpetual reached out for assistance, they were striving to establish reusable foodware systems in four cities across they US. They requested that we help determine a methodology for identifying potential distribution and collection points for two of the cities, Hilo, Hawaii and Galveston, Texas.

First, in order to find optimal distribution points, we had to figure out what business might be interested in using reusable foodware. This is because we'd want to place the distirbution points in central locations for such businesses. We downloaded business data for the two cities from the public Google and Yelp APIs. The data included information on business like their classification (e.g. bakery, fast food, pharmacy, hotel), address, hours, and ratings. If the business served food, the data sometimes also indicated if they provided delivery or takeout.

After cleaning the data and filtering for businesses we thought would use foodware, we moved onto determining distirbution point that would supply them. We decided on using weighted K-means clustering to do so. The weight based on how much foodware we estimated a business would use, and it was calculated using factors like the business classification, how many ratings they had, whether they offered delivery, and their hours. The address at the center of each custer was out proposed distribution point.

<div class="flex-center-container">
  <div>
    <img src="/assets/img/proj_details/api_data.png" height="300" style="margin-right: 30px">
    <img src="/assets/img/proj_details/distribution_point.png" height="300">
  </div>

  <p class="summary-text">Mapped foodware-using establishments (identified using API data) and mapped distribution points</p>
</div>

Next, we addressed the task of deciding collection points. We figured that the most conveneint places for consumers to retun foodware would be near their homes and/or offices. While the Google and Yelp APIs provided lots of data on businesses, the data did not include many residences or workplaces. Therefore, we had to pivot to a new data source: parcel data provided by the local governments. These data sets showed how the cities were divided into parcels (very small portions of land) and what each parcel was zoned for (e.g. multifamily residential, industrial, commercial).

Once again, we used weighted k-means clustering to determine central collection points. This time, the weights were a "convenience score" we calculated using factors like the parcel type, estimated population, and foot traffic data. However, because these collection point locations we calculated were just latitudes and longitudes, we weren't sure exactly what they pointed at. They could point to the middle of a highway or someone's backyard, and we wanted to ensure that the collection points were accessible. In order to address this concern, we decided to that the final collection point locations ought to be the closest businesses to each of the prelimary collection point locations we calculated.

<div class="flex-center-container">
  <div>
    <img src="/assets/img/proj_details/parcel_data.png" height="300" style="margin-right: 30px">
    <img src="/assets/img/proj_details/collection_point.png" height="300">
  </div>

  <p class="summary-text">Galveston parcel data, and an example of a prelimiary and final collection point</p>
</div>

In the end, we presented work, and we turned over our findings and code for Perpetual's use. We left the code flexible so they could adjust factors like the number of distribution/collection points or how the weights for clustering were calculated. A one pager of our work and a recording our our video presentation are linked below.

Note: We worked on this project through a shared Github repository. However, I cannot link to it as the account I used was associated with my college email that I no longer have access to.

#### One Pager Summary
<iframe 
  src="/assets/perpetual_one_pager.pdf" 
  width="100%" 
  height="500px"
  style="border: none;">
</iframe>

#### Final Video Presentation
<video controls width="100%" height="auto">
  <source src="/assets/perpetual_final_presentation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>