import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="SKILLS">

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	Feature engineering, cleaning, and transformation datasets with Pandas, NumPy, Matplotlib.
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	Traditional algorithms (RF, KNN, SVM, XT) and dimensionality reduction (PCA, t-SNE). Sklearn models (XGB, LGBM, Cat) and competition techniques like blending, stacking.
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	PyTorch, common models (CNN, RNN, ResNet, LSTM), graph neural network (GCN, GAT, building graph with PyG), and including pre-training, transfer learning.
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	Hands-on experience with LLMs (Llama3, BERT) Text Classification and Generation .
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	Knowledge of PEFT and SFT, utilize quantization and fine-tune (QLoRA) LLMs for acceleration.
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	NLP (NLTK, HMM, Word2Vec), image processing (detection, segmentation).
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	ARIMA/DARIMA, differencing, ACF, and PACF analysis for Time Series forecasting.
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	Familiar with Linux systems, Git, MySQL.
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          •	Built online services with Django, HTML, CSS, and JavaScript.
        </div>
      </div>
    </Section>
  );
}
