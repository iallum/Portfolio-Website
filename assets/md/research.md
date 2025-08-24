## Programming Models of Unemployment Insurance Coverage
*Summer 2021*

Language: R

#### Summary
* Worked for a joint UChicago Harris (Public Policy) and Booth (Business) economic research lab
* Programmed complex models to estimate unemployment insurance coverage under alternative benefits systems
* Regularly updated the principal investigator and collaborating professors from MIT and Harvard on my findings
* Final output was presented to Congress and published by the American Economic Association

#### Context
The summer before my junior year at UChicago, I was a research assistant for a UChicago research lab led by two principal investigators (PIs) from the Harris School of Public Policy and the Booth School of Business. When I started, the PIs were interested in evaluating how potential changes to the unemployment insurance (UI) system in the US would affect coverage for those in need during times of economic difficulty, such as recessions. Most states stipulate that people may only receive 26 weeks of benefits under typical circumstances. When certain extraordinary criteria are met (e.g., the unemployment rate surpassing a legislated threshold), some states allow for people to claim additional weeks of UI (usually 13, but up to 20). The extended benefits, however, are cut off when the critera is no longer met (e.g. the unemployment rate falling below the threshold again). However, my PIs believed that the current system did not adequately provide support when people are most in need. They thought the triggers for extended benefits were too strict, and that in the worst of times, even 20 weeks of extended benefits may not be sufficient. They wanted to investigate how coverage might change with varied on and off triggers for extended benefits and with different extended benefit durations. I spent my summer assisting with research, discussing and exploring effects of various changes to the current system and programming a flexible model for evaluating UI coverage under alternative proposed systems. For this research, the team and I utilized Github heavily, sharing frequent code updates, discussing progress for different topics in different issue tickets, and sharing Markdown memos.

#### My Work
When I joined the research lab, they had produced the data they wanted to use for the analysis (simulated employment data at the individual level from 1994 through 2019, covering both the 2001 and 2007-2009 recessions). However, they had not begun analysis with the data, and that is what I was directed to work on. I was tasked with programming models of varied benefits systems using the employment data as input and providing information on benefit coverage over time as output.

<div class="flex-center-container">
 <img src="/assets/img/proj_details/uncovered_job_losers.png" height="300">

  <p class="summary-text">A plot showing the share of the labor force comprised of unemployed, uncovered people over time for one model we explored</p>
</div>

In concept, we wanted to compare the current system (of typically just 26 weeks of benefits, with an additional 13-20 weeks in extreme circumstances) with variations we proposed. The variations we came up with differed from the current system in three ways:
1. What triggered on an extended benefits period
2. How many extra weeks of UI people would revieve during extended benefits periods
3. What triggered off an extended benefits period

There were multiple ways we considered altering the trigger on conditions. For example, instead of only looking at state-level unemployment rates, we also looked at national employment rates and having the whole country trigger on at the same time. Or instead of using a certain unemployment rate as the threshold to trigger extended benefits, we tried using a large increase in the unemployment rate over a short period of time as the trigger.

As for the number of extra weeks available during an extended benefits period, we started by simply increasing that number. However, we began to think of tiered systems. For tiered systems, the worse the economy was doing, the more extra weeks people could access. We considered up to 4 tiers of benefits.

<div class="flex-center-container">
  <div>
    <img src="/assets/img/proj_details/comparing_models.png" height="320">
    <img src="/assets/img/proj_details/comparing_weeks.png" height="320">
  </div>

  <p class="summary-text">The first plot compares coverage between benefit systems with different trigger on and off conditions. The second compares coverage for different lengths of additional benefits during an extended benefits period.</p>
</div>

<div class="flex-center-container">
 <img src="/assets/img/proj_details/weeks_and_models_table.png" height="140">

  <p class="summary-text">This table summarizes coverage for models varying both in trigger on and off conditions and in additional benefits lengths. Larger numbers indicate more comprehensive coverage.</p>
</div>

Last, regarding how extended benefit periods would trigger off, many of our considerations were similar to our considerations for triggering on. One additional twist we tried, though, was whether we'd provide a "soft landing" for people who had exceeded the standard 26 weeks of benefits and were on to the extra weeks when a period triggered off. Without a soft landing, such people would immediately lose coverage. However, if we allowed a soft landing, such people would be able to either finish off the extra weeks they had started or receive a set number of weeks to prevent an immediate loss of coverage.

<div class="flex-center-container">
 <img src="/assets/img/proj_details/soft_landing_flow_chart.png" height="380">

  <p class="summary-text">A flowchart illustrating how many weeks an unemployed person would receive depending on their current circumstances. This flowchart is for a system where an extended benefits period would provide 34-73 additional weeks of support and a soft landing. It does not provide details on what would trigger on or off an extended benefits period.</p>
</div>

As we debated these different changes, I conducted exploratory analysis, plotting when we would see states trigger on and off under such circumstances. I summarized my findings in stand-up meetings and shared them in thorough and detailed memos Github. These memos were a practice in effectively communicating complex ideas clearly and concisely (the models quickly got very complicated, and at one point we were considering and comparing 27 different models). With the memos, I also learned to anticipate questions people may have upon reading them and to preemptively address them in my write-ups.

The main focus of my work, though, was programming a function in R that allowed me to model UI coverage under each of these different scenarios using our individual-level employment data. The single function was programmed to be flexible, allowing me to input values for each of the many different factors we were considering. 

Once we got to this point, we began to compare the performance of the different models. For example, we compared how many times the on triggers with state-level criteria caught recessionary events before the ones with national-level ones criteria. We compared UI coverage rates, and we compared false positive and false negative rates for various models. (False positives are when an extended benefit period triggers on when not needed, and false negatives are when an extended benefit period is not triggered on when needed.)

<div class="flex-center-container">
  <img src="/assets/img/proj_details/state_caught_false_negatives.png" height="300">

  <p class="summary-text">This plot looks at the extended benefit periods that would have begun earlier under a state-triggering model than under a national-triggering model. The plot shows the lag in months between the two models triggering, and it also shows how many of those triggered periods would have been false negatives. </p>
</div>

<div class="flex-center-container">
  <div>
    <img src="/assets/img/proj_details/false_positives.png" height="320">
    <img src="/assets/img/proj_details/false_negatives.png" height="320">
  </div>

  <p class="summary-text">The plot on the left looks at the number of extended benefit periods triggered that were false positives for a certain model. The plot on the right plots the false negatives for a different model.</p>
</div>

As one might expect, we found that the more generous a model was (the easier it was to trigger on, the more weeks of extra benefits that were provided, the longer the soft landing, etc.), the more unemployed people were covered in times of economic difficulty. There were also fewer false negatives and more false positives. And, of course, more generous models would also cost the government the government more as greater coverage requires more unemployment insurance payouts.

In the end, our findings were shared with a committee in Congress, and the PIs wrote an article written comparing the outputs of the models we had explored. In it, I was thanked for my research contributions.

#### Published Article
The final article, published by the American Economic Association, can be found [here](https://www.aeaweb.org/articles?id=10.1257/pandp.20221075). However, you must be a member to access the article, so I've also included a working paper version of it below.

<iframe 
  src="/assets/UI_article.pdf" 
  width="100%" 
  height="500px"
  style="border: none;">
</iframe>