## Programming Models of Unemployment Insurance Coverage
*Summer 2021*

Language: R

#### Summary
* Worked for a joint UChicago Harris (Public Policy) and Booth (Business) economic research lab
* Programmed complex models to estimate unemployment insurance coverage under alternative benefits systems
* Regularly updated the principal investigator and collaborating professor from MIT and Harvard on my findings
* Final output was presented to Congress and published by the American Economics Association

#### Context
The summer before my junior year at UChicago, I was a research assistant for a UChicago research lab led by two principal invesigators (PIs) from the Harris School of Public Policy and the Booth School of Business. At the time I started, they were interested in evaluating how potential changes to the unemployement insurance (UI) system in the US would affect coverage for those in need during times of economic diccult, such as recessions. Most states stipulate that people may only recieve 26 weeks of benefits under typical circumstances. When certain extrordinary critera are met (e.g. the unemployment rate surpassing a legislated thresholds), some states allow for people to claim additional weeks of UI (usually 13, but up to 20). The extended benefits, however, are cut off when the critera is no longer met (e.g. the unemployment rate falling below the threshold again). However, my PIs believed that the current system is too strict and does not adequately provide support when people are most in need. They thought the triggers for extended beenfits were too struct, and that in the worst of times, even 20 weeks of extended benfits may not sufficient. They wanted to investigate how covereage might change with varied on and off triggers for extended benefits and with different extended benefit durations. I spent my summer assisting with research, discussing and exploring effects of various changes to the current system and programming a flexible model for evaluting UI coverage under alterative proposed systems. For this research, the team and I utilized Github heavily, sharing frequnt code updates, discussing progress for different topics in different issue tickets, and sharing Markdown memos.

#### My Work
When I joined the research lab, they had produced the data they wanted to use for the analysis (simulated enomplment data at the indivudal level from 1994 through 2019, covering both the 2001 and 2007-2009 recessions). However, they had not begun analysis with the data, and that is what I was directed to work on.

In concept, we wanted to compare the current system (of typically just 26 weeks of benefits, with an additional 13-20 weeks in extreme circumstances) with variations we proposed. The variations we came up with differed from the current system in three ways:
1. What triggered on an extended benefits period
2. How many extra weeks of UI people recieved during the extended benefits periods
3. What triggered off an extended benefits period what

There were multiple ways we considered altering the trigger on conditions. For example, instead of only looking at state-level unemployment rates, we thought to look at national employments rates and have the whole country trigger on at the same time. Or instead of using a certain unemployment rate as the threshold to trigger extended benfits, we used a large increase in the unemployment rate over a short period of time as the trigger.

As for the number of extra weeks available during an extended benefits period, we started by simply increasing that number. However, we began to think of tiered systems. For tiered systems, the worse the economy was doing, the more extra weeks people could access. We considered up to 4 tiers of benefits. 

Last, in regards to how extended benefit peiods would trigger off, many of our considerations were similar to our considerations for triggering on. One additional twist we tried though was whether we'd provide a "soft landing" for people who had exceeded the standard 26 weeks of benefits and were currently using extra weeks when a period triggered off. If there was no soft landing, such people would immediately lose coverage. However, if we allowed a soft landing, such people would be able to either finish off the extra weeks they had started or simply receive a set number of weeks to prevent an immediate cut off of coverage.

As we debated these different changes, I conducted exploratory analysis, plotting when we would see states trigger on and off under such circumstances. I summarized my findings in stand up meetings and shared them in thoroguh and detailed memos Github. These memos were a practice in effectively communcicating complex ideas (as the models quickly got very complicated) clearly and concisely. With them, I also learned to anticipate questions people may have upon reading them and to preemptively address them in my write-ups.

In the end, we largely settled on using the Sahm rule our trigger on condition (when the three-month movig average of the unemployment rate rises by >= 0.5 percentage points compared to its lowest point in the previous 12 months) and state unemployment rates for the trigger off condition. However, we still debated between using state and national rates for the on trigger. And we tried multiple different extended benefit lengths, benefit tiers, and the state unemployment rates for triggering off. At one point, we were considering and comparing 27 different models at once.

I programmed a complex function in R that allowed me to model UI coverage under each of these different scenarios using our indivudal-level employment data. The single function allowed me to input values for each of the many different factors we were considering. Once we got to this point, we began to compare the performace of the different models. For example, we compared how many times the state-level on triggers caught recessionary events before the national-level ones did. We compared the false positve and false negative rates of triggering on for various models, and we compared the UI coverage rates.

As one might might expect, we found that the more flexible a model was (the easier it was to trigger on, the more weeks of extra benefits that were provided, the longer the soft landing, etc.), the more unemployed people were covered in times of economic difficulty. There were also fewer false negatives (extended benefit not triggering on when needed) and more false positive (extended benefits trigger on when not needed).

In the end, our findings were shared with a committee in congress, and an article was written comparing the output of the models I had created. In it, I was thanked for my research contributions.

#### Published Article
[Link](https://www.aeaweb.org/articles?id=10.1257/pandp.20221075) to the published article on the American Economics Association website (must be a member to acces)

[Free Working Paper Version](assets/UI_article.pdf)