## Image Captioning with Conditioned Recurrent Neural Networks
*Spring 2026*

Language: Python (PyTorch)

#### Summary
* Developed a multi-modal deep learning system combining computer vision and natural language processing to generate descriptive text captions for images
* Programmed an image-conditioned LSTM language model that initializes its internal memory states from visual feature vectors to guide sentence generation
* Constructed custom PyTorch dataset pipelines to handle text tokenization, vocabulary indexing, sequence padding, and multi-modal batching across the Flickr8k dataset
* Implemented greedy search, multinomial distribution sampling, and a K=5 beam search decoder from scratch to generate and evaluate caption quality

#### Context
For an assignment in my Natural Language Processing course (COMS 4705) at Columbia University, I completed a project focused on image captioning using recurrent neural networks (RNNs). The task combines visual feature extraction with language modeling to automatically describe the content of an image in natural text.

The project utilized the Flickr8k dataset, which contains 6,000 training images paired with 5 human-written reference captions per image. The course framework provided a pre-trained ResNet-18 image feature extractor, raw text caption data, and utilities for model training and BLEU metric evaluation. My work focused on implementing the text processing pipeline, state conditioning mechanism, and sequence decoding algorithms.

#### My Work
To build the end-to-end captioning system, I implemented key components across data preprocessing, model state conditioning, and sequence generation:

* **Text Processing & Vocabulary Pipeline**:
  * Formatted raw text captions from the Flickr8k dataset, adding special boundary tokens (`<START>` and `<EOS>`) to mark sequence start and termination.
  * Constructed bi-directional vocabulary mappings (`word_to_id` and `id_to_word`) for an 8,922-word vocabulary.
  * Implemented PyTorch `Dataset` classes (`CaptionDataset` and `CaptionAndImage`) to handle sequence padding with `<PAD>` up to `MAX_LEN=40` and batch `(image_encoding, input_seq, target_seq)` tensor pairs for training.

* **Conditioned LSTM State Initialization**:
  * Programmed the PyTorch model module to bridge visual features with sequence generation.
  * Implemented linear projection layers (`nn.Linear`) that transform 512-dimensional ResNet image feature vectors into initial hidden states and cell states for the LSTM.
  * This state conditioning pre-loads the model's memory with visual content before sentence generation begins, ensuring every generated word is conditioned on the input image.

* **Sequence Generation & Decoding Algorithms**:
  * *Greedy Search*: Implemented deterministic decoding that selects the single highest-probability token (`argmax`) at each sequence step until reaching `<EOS>` or maximum sequence length.
  * *Multinomial Sampling*: Implemented a sampling decoder that converts model outputs into probability distributions via `torch.softmax` and samples candidate tokens to introduce generation diversity.
  * *Beam Search (K=5)*: Programmed a beam search algorithm from scratch to maintain the top K=5 candidate sequence hypotheses at each step. By tracking accumulated log-probabilities across multiple candidate paths simultaneously, the beam search decoder avoids getting trapped in local greedy choices and yields significantly more accurate, fluent captions.

#### Generated Caption Results

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/captioning/greedy_only.png" height="350">
  <p class="summary-text">Greedy Output: <em>"A man is scaling a rock face."</em></p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/captioning/comparison_1.png" height="350">
  <p class="summary-text">Greedy Output: <em>"A man is scaling a rock face."</em><br>Beam Search Output: <em>"A man is climbing a rock face."</em></p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/captioning/comparison_2.png" height="350">
  <p class="summary-text">Greedy Output: <em>"Two young women posing for a picture."</em><br>Beam Search Output: <em>"Three people posing for a picture."</em></p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/captioning/comparison_3.png" height="350">
  <p class="summary-text">Greedy Output: <em>"A surfer is riding a wave."</em><br>Beam Search Output: <em>"A surfer rides a wave."</em></p>
</div>
