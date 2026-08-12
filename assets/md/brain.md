## AI Humor Generation: Topic Importance Scoring
*Summer 2026*

Language: Python, SQL (Supabase/PostgreSQL)

#### Summary
* Researched and developed topic importance scoring algorithms for a multi-team project building an AI model capable of generating humorous captions for images
* Formulated mathematical scoring models to rank the relevance of student discussion topics
* Developed a new post-to-topic aggregation scoring method to address limitations of the prior method, which was vulnerable to outsized influence from single viral posts
* Used AI-assisted development tools to rapidly construct front-end scoring interfaces, draft formula comparison displays, and time-series score visualizations

#### Context
Over the summer, I participated in the Student Brain Project, a large-scale research initiative of over 35 researchers and engineers focused on building an AI model capable of generating humorous captions for images. The overall goal of the project was to automatically generate funny, context-aware image captions and memes based on trending topics Columbia University students talked about on Sidechat.

Because the project spanned a vast number of areas, from data engineering to AI modeling to user interfaces, the researchers were divided into specialized sub-teams. Within this larger organization, my research partner and I were on the Mathematics team, responsible for topic scoring research, implementation, and evaluation. We worked directly between our upstream and downstream project partners.

* Upstream Teams: Scraped campus discussion posts from Sidechat, processed text, and grouped related posts into distinct topics.
* My Team (Mathematics): Researched, implemented, and evaluated mathematical models and scoring algorithms to evaluate the real-time importance and engagement of each topic.
* Downstream Teams: Used our topic importance scores to determine which topics the AI humor generator should process for image captioning versus which topics should be forgotten at any given time.

#### My Work
Together with my research teammate, I designed, built, and evaluated the mathematical models and software tools powering topic importance scoring:

* **Industry Scoring Research**:
  * Investigated scoring algorithms and ranking mechanics used by major platforms such as Reddit (evaluating Hot, Best, Top, and Rising sort mechanics) and Facebook to understand how vote history, time decay, and engagement signals are combined in real-world systems.

* **Normalized Topic-Level Scoring**:
  * Reviewed and normalized the existing topic-level scoring model. Originally, raw topic scores were not normalized, making it difficult to compare importance fairly across different topics.
  * Normalized the 4 topic-level components: *Recency* (time since the last post), *Velocity* (posting volume acceleration), *Engagement* (average post engagement), and *Persistence* (consistency of posting within topic).
  * Calculated a weighted average of the normalized scoring components into a normalized *Topic Importance Score*.

<div class="flex-center-container" style="margin-bottom: 35px;">
  <div>
    <img src="/assets/img/proj_details/brain/engagement_old.png" height="300" style="margin-right: 15px;">
    <img src="/assets/img/proj_details/brain/engagement_new.png" height="300">
  </div>
  <p class="summary-text">Rescaling engagement scores from unbounded raw values (left) to normalized 0–1 scores (right) based on average topic engagement values</p>
</div>

* **Post-to-Topic Aggregation**:
  * Since topic-level scoring only looked at engagement across all posts within a topic, a single viral post had the ability to boost an entire topic's score, making it seem like it was very popular when in fact only one post had been popular. Therefore, we wanted to rework the scoring in a way that couldn't be so easily swayed by a single post. Our approach was to devise a way of scoring importance at the post level and aggregating post scores into topic scores.

  * **Post-Level Scoring**:
    * Reformulated the 4 normalized scoring components to apply to individual posts: *Post Recency* (time since the post's creation), *Post Velocity* (post engagement), and *Post Persistence* (consistency of post engagement).
    * Combined components into a weighted *Post Importance* score.
  * **Post-to-Topic Aggregation Pipeline**:
    * Calculate post importance for each post.
    * Compute the topic importance score by taking the weighted average of post importance scores for the most recent posts in each topic (with newer posts receiving more weight).
    * Determine a topic activity score (computed by comparing the number of active posts for any given topic to the minimum and maximum active post counts across all topics).
    * Derive the *Final Importance Score*, combining the topic importance and activity scores to dampen single viral post outliers.

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/brain/post_level_scoring_visual.png" style="width: 100%; max-width: 750px; height: auto;">
</div>

* **Topic History Tracking & Visualizations**:
  * Added historical tracking to the database to save topic scores and engagement metrics from each data scrape run.
  * Created score history tracking tools and line graphs in the web interface to visualize how a topic's importance score increased or decreased over time.

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/brain/score_history_visualization.png" height="320">
  <p class="summary-text">Topic score history visualization tracking score evolution over time across data scrapes</p>
</div>

* **Formula Lab & AI-Assisted Testing Tools**:
  * Used AI coding tools to build the front-end interface for an internal analysis tool for designing and testing scoring models.
  * Built the ability to load real live topic data into Formula Lab to draft and test new scoring formulas on actual campus discussion topics.
  * Created testing tools that display a step-by-step evaluation trace—showing how each individual subscore contributes to the final score—and compare new draft formula outputs side-by-side against stored live scores.

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/brain/scoring_breakdown.png" height="320">
  <p class="summary-text">Topic-level scoring component breakdown and formula evaluation trace</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <div>
    <img src="/assets/img/proj_details/brain/post_aggregation_breakdown_1.png" height="220" style="margin-right: 15px;">
    <img src="/assets/img/proj_details/brain/post_aggregation_breakdown_2.png" height="220">
  </div>
  <p class="summary-text">Formula Lab interface displaying post-level score breakdowns and how the topic importance and activity scores contribute to the final importance scores</p>
</div>
