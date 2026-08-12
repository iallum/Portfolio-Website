## Song Popularity Prediction and Music Recommendation
*Spring 2022*

Language: R

#### Summary
* Investigated what factors predict the popularity of a song using a random forest and a logistic regression
* Built a recommendation system using k-means clustering and matrix completion

#### Context
As the final project for my Econometrics and Machine Learning class at UChicago, I worked with a classmate to build supervised machine learning models that could predict the popularity of a song. We also attempted to build a recommendation system with unsupervised machine learning methods. We primarily worked with the "Hit Predictor Dataset" on Kaggle, but for the recommendation system, we also worked with our own Spotify data.

#### My Work
For the course's final project, we were tasked with using the machine learning methods we had covered in class to investigate a topic of our choice. My classmate and I decided on two goals for our project. First, we wanted to use to build a model that could predict if a song would be a hit or a flop. And second, we wanted to develop a music recommendation model.

Before we began our own analysis, we conducted literature review, looking at other studies that had similarly looked at predicting the popularity of songs and at entertainment recommendation systems. We took inspiration from them and learned what methods had been successful and unsuccessful to whittle down our potential approaches. Next, we found our data. For the prediction model, we found a Hit Predictor Dataset on Kaggle that was comprised of decades of Spotify and Billboard API data. Out of relevancy concerns, though, we filtered the data to the most recent decade, 2010-2019. This data included a variety of variables, such as track title, artist, duration, tempo, time until chorus, loudness, and dancability. There was also a binary factor that indicated if the song was a hit or flop. My classmate and I also both downloaded our own Spotify listening history for the song prediction portion of our analysis.

For the prediction model, we tried two approaches. As a straighforward benchmark approach, we started off with a logistic regression. We split the Hit Predictor Dataset into a training and testing set. Then we fit a logistic regression that included all the variables (except the song title and artist) on the training set. The hit/flop variable was our dependant variable. Seeing our results, there were five explanatory variables without significant coefficients. We refit the logistic regression without those variables, and the resulting coefficients were all significant. Running the logistic regression with the testing dataset, we had a success rate of 80.93% (95% confidence interval of 79.24% to 82.54%). Interestingly, the false positive rate was about 1.5 times as large as the false negative rate, meaning the model was more likely to incorrectly predict a flop as a hit than the converse.

We similarly trained a random forest with the training dataset, filtering for explanatory variables with a substantial effect on the accuracy of the model. The resulting model had an 85.13% success rate when tested on the testing dataset. The 95% confidence interval was 83.59% to 86.58%, putting its success rate squarely above the logistic regression. While both the false positive and negative rates were lower with the random forest, the false positive rate was again higher.

<div class="flex-center-container">
 <img src="/assets/img/proj_details/spotify/lr_and_rd_res.png" height="200">

  <p class="summary-text">Summary of results for the two different prediction models</p>
</div>

<div class="flex-center-container">
 <img src="/assets/img/proj_details/spotify/rf_vars.png" height="300">

  <p class="summary-text">Visualization of explantory variable importance for the random forest</p>
</div>

For both the random forest and logistic regression models, the variables with the most explanatory power were instrumentalness, if there was a featured artist, energy, and loudness.

Next, we tackled our goal of a song recommendation system. We tried both k-means clustering and matrix completion to do this. K-means clustering would work by simply suggesting songs similar to the one a user was currently enjoying. After clustering songs, we'd recommend new songs in the same cluster as the current song. Matrix completion would suggest music based on how the user had previously liked and rated other songs. To determine how many clusters we wanted for our k-means analysis, we looked at the mean silhouette score for a range of cluster counts. Having done so, we determined that 5 was the optimal number of clusters and created such a k-means model. Unfortunately, though, we were unable to succeed in our matrix completion approach due to limitations in our data.

<div class="flex-center-container">
 <img src="/assets/img/proj_details/spotify/k_means_silhouette.png" height="300">

  <p class="summary-text">Silhoutte analaysis visualizations for when there are 5 clusters</p>
</div>

#### Report
<iframe 
  src="/assets/spotify_final_report_edited.pdf" 
  width="100%" 
  height="500px"
  style="border: none;">
</iframe>

#### Github
The Github repository for this project can be found [here](https://github.com/iallum/ml-metrics-final-project/tree/main).