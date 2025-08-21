## Song Popularity Prediction and Music Recommendation
*Spring 2022*

Language: R

#### Summary
* Invesitgated what factors predict the popularity of a song using a random forest and a logisitc regression
* Built a recommendation system using k-means clustering and matrix completion

#### Context
As the final project for my Econometrics and Machine Learning class, I worked with a classmate to build supervised machine learning models that could predict the popularity of a song. We also attemped to build a recommendation system with unsupervised machine learning methods. We primarily worked with the "Hit Predictor Dataset" on Kaggle, but for the recommendation system, we also worked with our own Spotify data.

#### My Work
For the course's final project, were tasked with applying the machine learning methods we had covered in class to investigate a topic of our choice. My classmate and I decided on two goals for our project. First, we wanted to use to build a model that could predict if a song would be a hit or a flop. And second, we wanted to develop a recommendation method based on song choices and reviews.

Before we began out own analysis, we conducted literature review, looking at other studies that had simiarlly looked at predicting the popularity of songs and at entertainment recommendation systems. We took inspiraition from them and learned what methods had been successful and unsuccessful to whitle down our potential approaches. Next, we found our data. For the prediction model, we found a Hit Predictor Dataset on Kaggle that was comprised of decades of Spotify and Billboard API data. Out of relevancy concerns though, we filtered the data to the most recent decade, 2010-2019. This data included a variety of variables, such as track title, artist, duration, tempo, time until chorus, loudness, and dancability. There was also a binary factor that indicated if the song was a hit or flop. My classmate and I also both downloaded our own Spotify listening history for the song predicition portion of our analysis.

For the prediction model, we tried two approaches. As straighforward benchmark approach, we started off with a logitic regression. We split the Hit Predictor Dataset into a training and testing set. Then we fit a logistic regression that included all the variables (except the song title and artist) on the training set. Seeing our results, there were five variables without significant coefficients. We refit the logistic regression without those variables, and the resulting coefficients were all significant. Running the logistic regression with the testing dataset, we had a success rate of 80.93% (95% confidence interval of 79.24% to 82.54%). Interestingly, the false positive rate was about 1.5 times as large as the false negative, meaning the mdoel was more likely to incorrectly predict a flop as a hit than the converse.

We similarlly trained a random forest with the training dataset, selecting for variables until all explanatory variables had a significant coefficient. The resulting model had a 85.13% success rate when tested on the testing dataset. The 95% confidence interval was 83.59% to 86.58%, putting it squarely above the logistic regression. While both the false postive and negative rates were lower with the random forrest, the false positve rate was again higher.

For both the random forest and logistic regression models, the variables with the most explanatory power were instrumentalness, if there was a featured artist, energy, and loudness.

Next, we tackled our goal of a song recommendation system. We tried both k-means clustering and matrix completion to do this. K-means clustering would work by simply just suggesting songs similar to the oen a user was currenlty enjoying. Matrix completion would suggest music based on how the user had previously liked and rated other songs. To determine how many clusters we wanted for our k-means analysis, we looked at the mean silhouette score for a range of clusters counts. Having done so, we determined that 5 was the optimal number of clusters and created such a k-means model. Unfortunately, though, we were unable to succeed in our matrix completion approach due to limitations in our data.

#### Report
[Report](assets/spotify_final_report_edited.pdf)

#### Github Link
[Github](https://github.com/iallum/ml-metrics-final-project/tree/main)