## Grocery Store Merger Pricing Analysis
*Fall 2024*

Language: PySpark

#### Summary:
* Worked for an economic consulting firm assesing the potential merger of two grocery brands
* Conducted analysis of a large pricing dataset using PySpark on Databricks
* Evaluated claims of price competition between various brands using statistical analysis

#### Context:
After graduating from the University of Chicago, I worked at an economic consulting firm (Charles River Associates) in its Antitrust and Competition practice for almost two years. Part of this job entailed working on cases for proposed mergers that had been challegend by the US government. For such cases, I would work with colleagues to produce an expert report arguing that the merger would or would not be harmful to competition in the relevant market.

One such case I worked on was for a proposed merger between two prominent grocery brands (undisclosed due to an NDA - I'll call them "Grocer A" and "Grocer B"). Their merger had been challenged, and I was tasked with helping argue that the proposed merger would not adversely affect the market. One main claim in our report was refuting the idea that the two brands competed on price and thus prevented each other from raising prices too high.

#### My Work:
We had been given company data showing price checks that Grocer A had made on all of its competitors for various products across a period of several years. The data contained detailed info on what stores had checked, what product had been checked, what the price was, and if the price incldued any discounts. Due to the vast size of the data, we could not work with it locally. Instead, we conducted our analysis on Databricks.

When we got to this point in the case, I volunteered that I would be happy to learn PySpark and work on the pricing analysis. At that time, I had experience with Python, but not PySpark, so I was excited for the learning opportunity and to expand my skill set. I took a day to learn the basics of PySpark and study example code used in other projects, and then I jumped right into the case workflow.

First, I cleaned the data. This entailed steps like extracting a product size variable from the product description and calculating a per unit price. We also had to flag observations with prices that were likely recorded in error. For example, we flagged observations that had outlier prices beyond the expected range and that could not be explained by any reasonable sales.

After the preliminary data cleaning, I investigated for trends, delving into what competitor brands were tracked the most and what prices changes, and under what conditions, looked to predict corresponding price changes for Grocer A. One primary component of our analysis was calculating a series of price correlations between various competitor prices and lagged prices from brand A. This was an attempt to identify if Grocer A appeared to change its prices more in response to Grocer B than to other stores.

My analysis was conducted independently alongside a coworker doing the same tasks. This was so that we could audit each other's work and ensure that our output was correct. As a result, this was also a practice in teamwork and communication. Whenever we found different results, we had to talk though our approaches and assumptions to identify where we had diverged without directly comparing code. After making adjustments to our code, we continued to compare and discuss until we arrived at a shared output that we both felt confident in.