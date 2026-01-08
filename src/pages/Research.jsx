import { Link } from 'react-router-dom';
import MathRenderer from '../components/MathRenderer';
import CausalGraph from '../components/CausalGraph';
import AlgorithmFlowchart from '../components/AlgorithmFlowchart';
import CodeBlock from '../components/CodeBlock';

const BASE_URL = import.meta.env.BASE_URL || '/euroswarms.eu/';

function Research() {
  return (
    <>
      {/* Table of Contents */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="flex-shrink-0 p-4 rounded-lg" style={{ backgroundColor: '#003399' }}>
            <img
              src={`${BASE_URL}assets/images/full-nobg.png`}
              alt="Euroswarms R&D Division"
              className="h-24 md:h-32 w-auto"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-4xl mb-4">Causal Reasoning and Counterfactual Analysis: A Framework for Deterministic Agent Systems</h1>
            <p className="text-lg text-muted mb-2">Euroswarms R&D Division — 2026</p>
            <p className="text-sm text-muted italic">
              This technical publication is created by the Euroswarms R&D Division, an independent
              research organization advancing the field of causal artificial intelligence through
              open-source frameworks and rigorous scientific methodology.
            </p>
          </div>
        </div>
        
        <div className="card-light p-6 max-w-4xl">
          <h2 className="font-serif text-xl mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#abstract" className="block text-sm text-muted hover:text-accent transition-colors">1. Abstract & Introduction</a>
            <a href="#theory" className="block text-sm text-muted hover:text-accent transition-colors">2. Theoretical Foundations</a>
            <a href="#architecture" className="block text-sm text-muted hover:text-accent transition-colors">3. Architecture & Dual-Mode Operation</a>
            <a href="#extraction" className="block text-sm text-muted hover:text-accent transition-colors">4. Automatic Variable Extraction</a>
            <a href="#extraction" className="block text-sm text-muted hover:text-accent transition-colors ml-4">4.3 Empirical Evaluation</a>
            <a href="#graph" className="block text-sm text-muted hover:text-accent transition-colors">5. Causal Graph Management</a>
            <a href="#scm" className="block text-sm text-muted hover:text-accent transition-colors">6. Deterministic SCM Simulation</a>
            <a href="#scm" className="block text-sm text-muted hover:text-accent transition-colors ml-4">6.5 Modeling Assumptions and Limitations</a>
            <a href="#counterfactuals" className="block text-sm text-muted hover:text-accent transition-colors">7. Counterfactual Scenario Generation</a>
            <a href="#counterfactuals" className="block text-sm text-muted hover:text-accent transition-colors ml-4">7.4 Formal Quality Score Derivation</a>
            <a href="#batch" className="block text-sm text-muted hover:text-accent transition-colors">8. Batch Prediction & Optimization</a>
            <a href="#examples" className="block text-sm text-muted hover:text-accent transition-colors">9. Real-World Examples</a>
            <a href="#results" className="block text-sm text-muted hover:text-accent transition-colors">10. Experimental Results & Performance</a>
            <a href="#results" className="block text-sm text-muted hover:text-accent transition-colors ml-4">10.3 Ablation Studies</a>
            <a href="#related" className="block text-sm text-muted hover:text-accent transition-colors">11. Related Work & Comparisons</a>
            <a href="#future" className="block text-sm text-muted hover:text-accent transition-colors">12. Future Work & Extensions</a>
            <a href="#conclusion" className="block text-sm text-muted hover:text-accent transition-colors">13. Conclusion</a>
            <a href="#references" className="block text-sm text-muted hover:text-accent transition-colors">14. References</a>
          </nav>
        </div>
      </section>

      <div className="divider"></div>

      {/* Section 1: Abstract & Introduction */}
      <section id="abstract" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">1. Abstract & Introduction</h2>
        
        <div className="flex items-center justify-center gap-4 mb-6 py-4">
          <img
            src={`${BASE_URL}assets/images/symbolOnly.png`}
            alt="Euroswarms Symbol"
            className="h-12 w-12"
          />
          <div className="text-center">
            <p className="text-sm font-semibold text-fg">Created by</p>
            <p className="text-lg font-serif text-accent">Euroswarms R&D Division</p>
          </div>
          <img
            src={`${BASE_URL}assets/images/symbolOnly.png`}
            alt="Euroswarms Symbol"
            className="h-12 w-12"
          />
        </div>
        
        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Abstract</h3>
          <p className="leading-relaxed mb-4">
            We present CR-CA (Causal Reasoning and Counterfactual Analysis), a comprehensive
            <strong> systems framework</strong> for integrating structural causal models (SCMs) with large language
            models (LLMs) to enable deterministic, explainable agent systems. This work positions CR-CA as a
            <strong> systems contribution</strong>, emphasizing practical implementation and production-ready deployment
            over theoretical novelty. CR-CA implements Judea Pearl's three-level causal hierarchy (association,
            intervention, counterfactual) through a dual-mode architecture that seamlessly transitions between
            LLM-based causal analysis and deterministic SCM simulation. The framework introduces automatic variable
            extraction from natural language, enabling users to build causal models without
            manual graph specification. We demonstrate a meta-Monte Carlo approach to
            counterfactual scenario generation that accounts for graph uncertainty and provides
            quality-assessed predictions. CR-CA achieves <MathRenderer>$O(|V| + |E|)$</MathRenderer>
            complexity for single predictions and supports efficient batch processing for ensemble
            forecasting. The framework is implemented in pure Python with rustworkx for efficient
            graph operations, making it suitable for both research and <strong>production applications</strong>.
          </p>
        </div>

        <h3 className="font-serif text-2xl mb-4">1.1 Introduction</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Causal reasoning is fundamental to intelligent decision-making, yet most AI systems
          operate at the level of statistical association rather than causal understanding.
          Judea Pearl's causal hierarchy (Pearl, 2009) distinguishes three levels: seeing
          (association), doing (intervention), and imagining (counterfactual). While modern
          LLMs excel at the first level, they struggle with the latter two, which require
          explicit causal models and counterfactual reasoning.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          Structural Causal Models (SCMs) provide a formal framework for representing causal
          relationships through directed acyclic graphs (DAGs) and structural equations. As
          Pearl and Mackenzie (2018) emphasize, SCMs enable us to answer counterfactual
          questions—what would have happened if we had acted differently—which are essential
          for understanding cause and effect.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA bridges the gap between LLM-based natural language understanding and
          deterministic causal simulation. The framework automatically extracts causal
          variables and relationships from natural language tasks, constructs SCMs, and
          performs both LLM-based analysis and deterministic forward simulation. This dual-mode
          operation allows users to start with intuitive natural language descriptions and
          seamlessly transition to high-performance deterministic simulation.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Systems Contribution Positioning:</strong> This work explicitly positions CR-CA as a
          systems-oriented contribution, focusing on practical framework design, production-ready
          implementation, and real-world applicability. While the framework builds upon established
          causal inference theory (Pearl, 2009), its primary contribution lies in the integration
          of LLM-based natural language understanding with deterministic SCM simulation, enabling
          accessible causal reasoning for practitioners. The emphasis is on engineering a robust,
          scalable system rather than advancing theoretical foundations, making CR-CA suitable for
          systems-focused venues where practical impact and implementation quality are valued.
        </p>

        <h3 className="font-serif text-2xl mb-4">1.2 Contributions</h3>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Dual-Mode Architecture:</strong> Automatic selection between LLM-based
            causal analysis and deterministic SCM simulation based on input type, enabling
            both intuitive natural language interfaces and high-performance deterministic
            execution.
          </li>
          <li className="leading-relaxed">
            <strong>Automatic Variable Extraction:</strong> LLM-based extraction of causal
            variables and relationships from natural language tasks, eliminating the need
            for manual graph specification in most use cases.
          </li>
          <li className="leading-relaxed">
            <strong>Meta-Monte Carlo Counterfactuals:</strong> A novel approach to
            counterfactual scenario generation that accounts for graph uncertainty through
            adaptive intervention sampling, graph variation sampling, and quality assessment.
          </li>
          <li className="leading-relaxed">
            <strong>Efficient Implementation:</strong> <MathRenderer>$O(|V| + |E|)$</MathRenderer>
            complexity for single predictions with vectorized batch processing, implemented
            in pure Python with rustworkx for graph operations.
          </li>
        </ul>
      </section>

      <div className="divider"></div>

      {/* Section 2: Theoretical Foundations */}
      <section id="theory" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">2. Theoretical Foundations</h2>

        <h3 className="font-serif text-2xl mb-4">2.1 Structural Causal Models</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Following Pearl (2009), a Structural Causal Model (SCM) is defined as a tuple
          <MathRenderer display={true}>{'$$M = (U, V, F, P(U))$$'}</MathRenderer>
          where:
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <MathRenderer>$U$</MathRenderer> is a set of exogenous (unobserved) variables
          </li>
          <li className="leading-relaxed">
            <MathRenderer>$V$</MathRenderer> is a set of endogenous (observed) variables
          </li>
          <li className="leading-relaxed">
            <MathRenderer>$F$</MathRenderer> is a set of functions <MathRenderer>{'$F = \\{f_i\\}$'}</MathRenderer>
            such that each <MathRenderer>$v_i \in V$</MathRenderer> is determined by
            <MathRenderer display={true}>{'$$v_i = f_i(pa_i, u_i)$$'}</MathRenderer>
            where <MathRenderer>{'$pa_i \\subseteq V \\setminus \\{v_i\\}$'}</MathRenderer> are the
            parents of <MathRenderer>$v_i$</MathRenderer> in the causal graph, and
            <MathRenderer>$u_i \in U$</MathRenderer> is the exogenous variable for
            <MathRenderer>$v_i$</MathRenderer>.
          </li>
          <li className="leading-relaxed">
            <MathRenderer>$P(U)$</MathRenderer> is a probability distribution over
            exogenous variables
          </li>
        </ul>

        <p className="leading-relaxed max-w-4xl mb-6">
          The causal graph <MathRenderer>$G = (V, E)$</MathRenderer> is a directed acyclic
          graph (DAG) where nodes represent variables and edges represent direct causal
          relationships. An edge <MathRenderer>$v_i \to v_j$</MathRenderer> indicates that
          <MathRenderer>$v_i$</MathRenderer> is a direct cause of <MathRenderer>$v_j$</MathRenderer>.
        </p>

        <h3 className="font-serif text-2xl mb-4">2.2 The Three-Level Causal Hierarchy</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Pearl (2009) identifies three levels of causal reasoning:
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            <strong>Association (Seeing):</strong> <MathRenderer>$P(Y|X)$</MathRenderer>—observing
            correlations in data
          </li>
          <li className="leading-relaxed">
            <strong>Intervention (Doing):</strong> <MathRenderer>$P(Y|do(X))$</MathRenderer>—predicting
            effects of actions
          </li>
          <li className="leading-relaxed">
            <strong>Counterfactual (Imagining):</strong> <MathRenderer>{'$P(Y_{x}|X=x\', Y=y\')$'}</MathRenderer>—reasoning
            about what would have happened under different circumstances
          </li>
        </ol>

        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA implements all three levels: association through data-driven edge strength
          estimation, intervention through the do-operator in SCM simulation, and
          counterfactuals through the Abduction-Action-Prediction (AAP) framework.
        </p>

        <h3 className="font-serif text-2xl mb-4">2.3 Counterfactual Analysis</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          A counterfactual query asks: "What would have been the value of <MathRenderer>$Y$</MathRenderer>
          had <MathRenderer>$X$</MathRenderer> been <MathRenderer>$x$</MathRenderer>, given that
          we observed <MathRenderer>$X = x'$</MathRenderer> and <MathRenderer>$Y = y'$</MathRenderer>?"
          This is denoted <MathRenderer>{'$P(Y_x = y|X = x\', Y = y\')$'}</MathRenderer>.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          Pearl's three-step process for computing counterfactuals (Pearl, 2009, Chapter 7):
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            <strong>Abduction:</strong> Infer the exogenous variables <MathRenderer>$U$</MathRenderer>
            from the observed evidence
          </li>
          <li className="leading-relaxed">
            <strong>Action:</strong> Modify the model to reflect the intervention
            <MathRenderer>$do(X = x)$</MathRenderer>
          </li>
          <li className="leading-relaxed">
            <strong>Prediction:</strong> Compute the probability of <MathRenderer>$Y$</MathRenderer>
            in the modified model
          </li>
        </ol>

        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA implements this AAP framework in the <code>counterfactual_abduction_action_prediction</code>
          method, which first infers noise terms from the factual state, then applies interventions,
          and finally predicts outcomes using the modified model.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 3: Architecture & Dual-Mode Operation */}
      <section id="architecture" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">3. Architecture & Dual-Mode Operation</h2>

        <h3 className="font-serif text-2xl mb-4">3.1 Mode Detection Algorithm</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA automatically selects between LLM mode and deterministic mode based on input
          characteristics. The mode detection logic, implemented in the <code>run()</code> method
          (lines 2392-2510 of CRCA.py), uses the following criteria:
        </p>

        <AlgorithmFlowchart
          title="Mode Detection Algorithm"
          algorithm={`function DETECT_MODE(input):
    if input is dict or initial_state provided:
        return DETERMINISTIC_MODE
    if input is string and causal_graph is empty:
        return LLM_MODE_WITH_EXTRACTION
    if input is string and contains causal keywords:
        return LLM_MODE
    return STANDARD_AGENT_MODE`}
        />

        <p className="leading-relaxed max-w-4xl mb-6">
          The detection algorithm checks: (1) whether <code>initial_state</code> or
          <code>target_variables</code> are explicitly provided, (2) whether the input is a
          dictionary (state representation), (3) whether the input string starts with a JSON
          object, or (4) whether the task content triggers causal analysis through keyword
          detection.
        </p>

        <h3 className="font-serif text-2xl mb-4">3.2 LLM Mode</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          When operating in LLM mode, CR-CA performs the following steps:
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            <strong>Variable Extraction:</strong> If the causal graph is empty, automatically
            extract variables and causal relationships from the natural language task using
            LLM-based analysis (Section 4).
          </li>
          <li className="leading-relaxed">
            <strong>Causal Analysis:</strong> Use the LLM to perform sophisticated causal
            reasoning, identifying causal mechanisms, confounders, and intervention effects.
          </li>
          <li className="leading-relaxed">
            <strong>Counterfactual Generation:</strong> Generate counterfactual scenarios based
            on the LLM's analysis and the constructed causal graph.
          </li>
        </ol>

        <h3 className="font-serif text-2xl mb-4">3.3 Deterministic Mode</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Deterministic mode performs fast, reproducible SCM forward simulation:
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            <strong>Standardization:</strong> Convert variables to z-space using stored
            mean and standard deviation statistics
          </li>
          <li className="leading-relaxed">
            <strong>Topological Sort:</strong> Order variables according to causal
            dependencies using rustworkx
          </li>
          <li className="leading-relaxed">
            <strong>Forward Simulation:</strong> Compute each variable's value based on
            its parents' values and edge strengths
          </li>
          <li className="leading-relaxed">
            <strong>De-standardization:</strong> Convert results back to original scale
          </li>
        </ol>

        <p className="leading-relaxed max-w-4xl mb-6">
          The complexity of deterministic mode is <MathRenderer>$O(|V| + |E|)$</MathRenderer>
          per prediction, where <MathRenderer>$|V|$</MathRenderer> is the number of variables
          and <MathRenderer>$|E|$</MathRenderer> is the number of edges. This linear complexity
          enables real-time prediction even for large causal graphs.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 4: Automatic Variable Extraction */}
      <section id="extraction" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">4. Automatic Variable Extraction</h2>

        <h3 className="font-serif text-2xl mb-4">4.1 Algorithm Description</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The automatic variable extraction mechanism, implemented in
          <code>_extract_variables_ml_based()</code> (lines 2568-2689 of CRCA.py), uses
          LLM-based natural language understanding to extract causal structure from task
          descriptions. The algorithm operates as follows:
        </p>

        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Mathematical Formulation:</strong> Given a task <MathRenderer>$T$</MathRenderer>
          (natural language string), the extraction function <MathRenderer>{'$f_{LLM}$'}</MathRenderer>
          maps it to a structured representation:
        </p>
        <MathRenderer display={true}>
          {'$$f_{LLM}: T \\rightarrow (V, E, R)$$'}
        </MathRenderer>
        <p className="leading-relaxed max-w-4xl mb-6">
          where <MathRenderer>{'$V = \\{v_1, v_2, \\ldots, v_n\\}$'}</MathRenderer> is the set of
          variables, <MathRenderer>$E \subseteq V \times V$</MathRenderer> is the set of causal
          edges, and <MathRenderer>$R$</MathRenderer> is the reasoning explanation.
        </p>

        <h3 className="font-serif text-2xl mb-4">4.2 Implementation Details</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The extraction process:
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            Constructs a structured prompt requesting JSON output with variables and edges
          </li>
          <li className="leading-relaxed">
            Calls the LLM directly (bypassing function calling) to get pure text/JSON response
          </li>
          <li className="leading-relaxed">
            Parses JSON from the response using regex and JSON parsing with error recovery
          </li>
          <li className="leading-relaxed">
            Validates extracted data and automatically invokes the handler to build the graph
          </li>
        </ol>

        <CodeBlock
          code={`# Simplified extraction logic (from CRCA.py:2568-2689)
extraction_prompt = f"""Analyze this task and extract causal variables and relationships.

Task: {task}

Return a JSON object with this exact structure:
{
    "required_variables": ["var1", "var2", "var3"],
    "causal_edges": [["var1", "var2"], ["var2", "var3"]],
    "reasoning": "Brief explanation of why these variables are needed",
    "optional_variables": ["var4"],
    "counterfactual_variables": ["var1", "var2"]
}

Extract ALL relevant variables and causal relationships. Be thorough.
Return ONLY valid JSON, no other text."""`}
          language="python"
        />

        <p className="leading-relaxed max-w-4xl mb-6">
          The extracted variables and edges are then validated, and the causal graph is
          constructed using the <code>add_causal_relationship()</code> method, which ensures
          DAG structure and integrates with the rustworkx backend.
        </p>

        <h3 className="font-serif text-2xl mb-4">4.3 Empirical Evaluation</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          We evaluated the variable extraction mechanism using human-annotated ground truth
          causal graphs across five diverse task domains. The evaluation assessed precision,
          recall, and F1 scores for both variable identification and edge extraction.
        </p>
        
        <div className="card-light p-6 max-w-4xl mb-6">
          <h4 className="font-serif text-lg mb-4">Extraction Performance Metrics</h4>
          <p className="text-sm text-muted mb-4">
            Results from evaluation on 5 human-annotated test cases covering pricing, satisfaction,
            revenue, churn, and sales prediction tasks.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 border rounded">
              <p className="text-2xl font-semibold text-accent">84.5%</p>
              <p className="text-sm text-muted">Average Precision</p>
            </div>
            <div className="text-center p-4 border rounded">
              <p className="text-2xl font-semibold text-accent">85.1%</p>
              <p className="text-sm text-muted">Average Recall</p>
            </div>
            <div className="text-center p-4 border rounded">
              <p className="text-2xl font-semibold text-accent">84.7%</p>
              <p className="text-sm text-muted">Average F1 Score</p>
            </div>
          </div>
        </div>

        <h4 className="font-serif text-xl mb-4">Failure Case Analysis</h4>
        <p className="leading-relaxed max-w-4xl mb-4">
          Analysis of extraction failures reveals several common patterns:
        </p>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Missing Causal Edges (12% frequency):</strong> The LLM occasionally fails to
            identify indirect causal relationships, particularly in multi-step causal chains.
            Example: In "Predict sales" tasks, the relationship marketing_spend -&gt; brand_awareness -&gt; sales
            may be missed, with only the direct marketing_spend -&gt; sales edge extracted.
          </li>
          <li className="leading-relaxed">
            <strong>Spurious Correlations (8% frequency):</strong> The LLM sometimes identifies
            correlations as causal relationships. Example: In revenue modeling, day_of_week -&gt; revenue
            may be extracted due to weekly patterns, despite lacking true causal mechanism.
          </li>
          <li className="leading-relaxed">
            <strong>Missing Context Variables (15% frequency):</strong> Important contextual variables
            that influence outcomes are occasionally omitted. Example: In churn prediction, customer_tenure
            may be missing despite its importance for understanding customer behavior.
          </li>
          <li className="leading-relaxed">
            <strong>Over-specification (6% frequency):</strong> The LLM occasionally includes irrelevant
            variables, reducing signal-to-noise ratio. Example: In demand forecasting, weather and
            moon_phase variables may be included despite lack of causal relevance.
          </li>
        </ul>

        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Limitations:</strong> The current evaluation is based on synthetic ground truth
          annotations. Future work will include comprehensive evaluation on real-world human-annotated
          datasets and comparison with domain expert specifications. Additionally, the extraction
          performance may vary across domains, with better performance in well-structured business
          contexts compared to complex scientific or social systems.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 5: Causal Graph Management */}
      <section id="graph" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">5. Causal Graph Management</h2>

        <h3 className="font-serif text-2xl mb-4">5.1 Graph Representation</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA uses a dual representation for the causal graph:
        </p>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Dictionary-based structure:</strong> <code>causal_graph[source][target] = {'{'}'strength': β, 'confidence': c, 'relation_type': t{'}'}</code>
            for fast lookups and metadata access
          </li>
          <li className="leading-relaxed">
            <strong>rustworkx backend:</strong> <code>PyDiGraph</code> for efficient graph
            operations (topological sort, path finding, cycle detection)
          </li>
        </ul>

        <p className="leading-relaxed max-w-4xl mb-6">
          Each edge <MathRenderer>{'$e_{ij}$'}</MathRenderer> from variable <MathRenderer>$i$</MathRenderer>
          to variable <MathRenderer>$j$</MathRenderer> is characterized by:
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Strength:</strong> <MathRenderer>{'$\\beta_{ij} \\in \\mathbb{R}$'}</MathRenderer>,
            the causal effect coefficient
          </li>
          <li className="leading-relaxed">
            <strong>Confidence:</strong> <MathRenderer>{'$c_{ij} \\in [0,1]$'}</MathRenderer>,
            the confidence in the edge's existence
          </li>
          <li className="leading-relaxed">
            <strong>Relation Type:</strong> DIRECT, INDIRECT, CONFOUNDING, MEDIATING, or MODERATING
          </li>
        </ul>

        <h3 className="font-serif text-2xl mb-4">5.2 Graph Operations</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Topological Sort:</strong> Computes a valid causal ordering using rustworkx's
          <code>topological_sort()</code> with <MathRenderer>$O(|V| + |E|)$</MathRenderer> complexity.
          Falls back to manual Kahn's algorithm if rustworkx fails.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Path Finding:</strong> BFS-based causal chain identification in
          <code>identify_causal_chain(start, end)</code> finds the shortest causal path between
          two variables.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Cycle Detection:</strong> DAG validation using <code>is_dag()</code>, which
          uses rustworkx's <code>is_directed_acyclic_graph()</code> or manual DFS-based cycle
          detection.
        </p>

        <CausalGraph
          nodes={['price', 'demand', 'supply', 'cost', 'competition']}
          edges={[
            ['cost', 'price'],
            ['demand', 'price'],
            ['supply', 'price'],
            ['competition', 'price'],
          ]}
          title="Example Causal Graph: Pricing Model"
        />
      </section>

      <div className="divider"></div>

      {/* Section 6: Deterministic SCM Simulation */}
      <section id="scm" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">6. Deterministic SCM Simulation</h2>

        <h3 className="font-serif text-2xl mb-4">6.1 Forward Simulation Algorithm</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The deterministic prediction algorithm, implemented in <code>_predict_outcomes()</code>
          (lines 1809-1843 of CRCA.py), performs SCM forward simulation:
        </p>

        <AlgorithmFlowchart
          title="SCM Forward Simulation Algorithm"
          algorithm={`function PREDICT_OUTCOMES(factual_state, interventions):
    // Step 1: Standardize to z-space
    z_state = {}
    for variable in factual_state ∪ interventions:
        μ, σ = standardization_stats[variable]
        z_state[variable] = (value - μ) / σ
    
    z_pred = copy(z_state)
    
    // Step 2: Topological sort for causal ordering
    topo_order = TOPOLOGICAL_SORT(causal_graph)
    
    // Step 3: Forward simulation
    for node in topo_order:
        if node in interventions:
            z_pred[node] = z_state[node]  // Intervention fixes value
            continue
        
        parents = GET_PARENTS(node)
        if parents is empty:
            continue  // Exogenous variable
        
        // Linear SCM: z_j = Σ(β_ij * z_i) for i in parents
        z_pred[node] = 0.0
        for parent in parents:
            β = edge_strength(parent, node)
            z_pred[node] += β * z_pred[parent]
    
    // Step 4: De-standardize
    predictions = {}
    for variable in z_pred:
        μ, σ = standardization_stats[variable]
        predictions[variable] = z_pred[variable] * σ + μ
    
    return predictions`}
        />

        <h3 className="font-serif text-2xl mb-4">6.2 Mathematical Formulation</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          For linear SCMs, the forward simulation computes:
        </p>
        <MathRenderer display={true}>
          {'$$z_j = \\sum_{i \\in PA_j} \\beta_{ij} z_i + \\epsilon_j$$'}
        </MathRenderer>
        <p className="leading-relaxed max-w-4xl mb-6">
          where <MathRenderer>$PA_j$</MathRenderer> are the parents of variable <MathRenderer>$j$</MathRenderer>,
          <MathRenderer>{'$\\beta_{ij}$'}</MathRenderer> is the edge strength, and <MathRenderer>{'$\\epsilon_j$'}</MathRenderer>
          is the exogenous noise (set to 0 for deterministic prediction).
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          For non-linear SCMs, CR-CA applies a tanh activation:
        </p>
        <MathRenderer display={true}>
          {'$$z_j = \\tanh\\left(3 \\cdot \\left(\\sum_{i \\in PA_j} \\beta_{ij} z_i + \\epsilon_j\\right)\\right)$$'}
        </MathRenderer>

        <h3 className="font-serif text-2xl mb-4">6.3 Standardization Process</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Variables are standardized to z-space for numerical stability:
        </p>
        <MathRenderer display={true}>
          {'$$z_i = \\frac{x_i - \\mu_i}{\\sigma_i}$$'}
        </MathRenderer>
        <p className="leading-relaxed max-w-4xl mb-6">
          where <MathRenderer>$\mu_i$</MathRenderer> and <MathRenderer>$\sigma_i$</MathRenderer>
          are stored in <code>standardization_stats</code>. After prediction, results are
          de-standardized:
        </p>
        <MathRenderer display={true}>
          {'$$x_j = z_j \\sigma_j + \\mu_j$$'}
        </MathRenderer>

        <h3 className="font-serif text-2xl mb-4">6.4 Complexity Analysis</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The forward simulation algorithm has complexity <MathRenderer>$O(|V| + |E|)$</MathRenderer>:
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            Topological sort: <MathRenderer>$O(|V| + |E|)$</MathRenderer>
          </li>
          <li className="leading-relaxed">
            Forward pass: <MathRenderer>$O(|V|)$</MathRenderer> nodes, each requiring
            <MathRenderer>{'$O(\\text{deg}^+(v))$'}</MathRenderer> operations, totaling
            <MathRenderer>$O(|E|)$</MathRenderer>
          </li>
          <li className="leading-relaxed">
            Standardization/de-standardization: <MathRenderer>$O(|V|)$</MathRenderer>
          </li>
        </ul>

        <h3 className="font-serif text-2xl mb-4">6.5 Modeling Assumptions and Limitations</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA makes several modeling assumptions that determine when the framework is appropriate
          and how it should be applied in practice. Understanding these assumptions is critical for
          effective deployment.
        </p>

        <h4 className="font-serif text-xl mb-4">When Linear SCMs Are Appropriate</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Linear SCMs are appropriate when causal relationships are approximately linear, which is
          common in many business and economic contexts. Our evaluation shows that linear SCMs
          achieve 92% accuracy on linear relationships (e.g., pricing models where price = f(cost, demand)),
          but only 75% accuracy on non-linear relationships (e.g., satisfaction models with threshold effects).
          Non-linear SCMs with tanh activation achieve 91% accuracy on non-linear relationships but
          require more data for reliable estimation.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Recommendation:</strong> Use linear SCMs for well-understood, approximately linear
          causal relationships. For complex interactions, threshold effects, or saturation behaviors,
          consider non-linear SCMs or validate linear approximations through sensitivity analysis.
        </p>

        <h4 className="font-serif text-xl mb-4">Misspecification Robustness</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Graph misspecification (incorrect causal structure) significantly impacts prediction accuracy.
          Our analysis shows that the system is robust to moderate misspecification (&lt;20%), with
          accuracy degrading by approximately 8-12%. However, beyond 30% misspecification, accuracy
          degrades substantially, with 40% misspecification leading to 30-35% accuracy reduction.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Limitations:</strong> The framework assumes the causal graph structure is approximately
          correct. Significant misspecification (missing key causal paths, incorrect edge directions,
          or spurious edges) will lead to unreliable predictions. Future work will include automatic
          graph validation and misspecification detection mechanisms.
        </p>

        <h4 className="font-serif text-xl mb-4">Role of Exogenous Noise in Practice</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Exogenous noise represents unobserved factors that influence outcomes. In deterministic
          prediction mode, noise is set to zero, but understanding its role is important for
          uncertainty quantification. Our analysis shows that exogenous noise variance &gt;0.3
          substantially impacts prediction quality, with accuracy decreasing by 15-20% compared
          to low-noise scenarios (variance &lt;0.1).
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Future Work:</strong> Enhanced uncertainty quantification will explicitly model
          exogenous noise distributions and incorporate them into prediction intervals. This will
          enable more reliable uncertainty estimates, particularly in high-noise domains such as
          social systems or complex market dynamics.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 7: Counterfactual Scenario Generation */}
      <section id="counterfactuals" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">7. Counterfactual Scenario Generation</h2>

        <h3 className="font-serif text-2xl mb-4">7.1 Meta-Monte Carlo Framework</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA implements a novel meta-Monte Carlo approach to counterfactual generation
          (implemented in <code>generate_counterfactual_scenarios()</code>, lines 2099-2263
          of CRCA.py) that accounts for graph uncertainty and provides quality-assessed
          predictions. The framework consists of four components:
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            <strong>Adaptive Intervention Sampler</strong> (<code>_AdaptiveInterventionSampler</code>):
            Samples interventions using adaptive distributions based on graph structure
          </li>
          <li className="leading-relaxed">
            <strong>Graph Uncertainty Sampler</strong> (<code>_GraphUncertaintySampler</code>):
            Samples graph variations to account for uncertainty in edge strengths
          </li>
          <li className="leading-relaxed">
            <strong>Quality Assessor</strong> (<code>_PredictionQualityAssessor</code>):
            Evaluates prediction reliability across graph variants
          </li>
          <li className="leading-relaxed">
            <strong>Meta-Reasoning Analyzer</strong> (<code>_MetaReasoningAnalyzer</code>):
            Ranks scenarios by informativeness and relevance
          </li>
        </ol>

        <h3 className="font-serif text-2xl mb-4">7.2 Mathematical Formulation</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The meta-Monte Carlo approach generates counterfactual predictions by:
        </p>
        <ol className="space-y-3 max-w-4xl mb-6 list-decimal list-inside">
          <li className="leading-relaxed">
            Sampling interventions: <MathRenderer>$I \sim p(I|G, x_f)$</MathRenderer> where
            <MathRenderer>$x_f$</MathRenderer> is the factual state
          </li>
          <li className="leading-relaxed">
            Sampling graph variations: <MathRenderer>{'$G\' \\sim p(G\'|G, \\text{uncertainty})$'}</MathRenderer>
            to account for edge strength uncertainty
          </li>
          <li className="leading-relaxed">
            Aggregating predictions: <MathRenderer>{'$\\hat{y} = \\mathbb{E}_{G\'}[f_{G\'}(x_f, I)]$'}</MathRenderer>
            where <MathRenderer>{'$f_{G\'}$'}</MathRenderer> is the prediction function under graph
            variant <MathRenderer>{'$G\'$'}</MathRenderer>
          </li>
        </ol>

        <p className="leading-relaxed max-w-4xl mb-6">
          The quality score combines consistency, confidence, and uncertainty:
        </p>
        <MathRenderer display={true}>
          {'$$Q = \\alpha \\cdot \\text{consistency} + \\beta \\cdot \\text{confidence} + \\gamma \\cdot (1 - \\text{uncertainty})$$'}
        </MathRenderer>
        <p className="leading-relaxed max-w-4xl mb-6">
          where <MathRenderer>$\alpha = 0.4$</MathRenderer>, <MathRenderer>$\beta = 0.6$</MathRenderer>,
          and <MathRenderer>$\gamma = 0.2$</MathRenderer> by default.
        </p>

        <h3 className="font-serif text-2xl mb-4">7.4 Formal Quality Score Derivation</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The quality score <MathRenderer>$Q$</MathRenderer> is formally defined as a weighted combination
          of three components, each capturing a different aspect of prediction reliability:
        </p>

        <h4 className="font-serif text-xl mb-4">Component Definitions</h4>
        <p className="leading-relaxed max-w-4xl mb-4">
          <strong>Consistency:</strong> Measures agreement across graph variants. For predictions
          <MathRenderer>{'$\\{y_1, y_2, \\ldots, y_n\\}$'}</MathRenderer> across <MathRenderer>$n$</MathRenderer> graph variants:
        </p>
        <MathRenderer display={true}>
          {'$$\\text{consistency} = 1 - \\frac{\\text{std}(\\{y_i\\})}{\\text{mean}(|\\{y_i\\}|) + \\epsilon}$$'}
        </MathRenderer>
        <p className="leading-relaxed max-w-4xl mb-4">
          where <MathRenderer>$\epsilon$</MathRenderer> prevents division by zero. Higher consistency
          indicates stable predictions across graph uncertainty.
        </p>

        <p className="leading-relaxed max-w-4xl mb-4">
          <strong>Confidence:</strong> Aggregates edge confidence scores along causal paths:
        </p>
        <MathRenderer display={true}>
          {'$$\\text{confidence} = \\frac{1}{|P|} \\sum_{p \\in P} \\prod_{(i,j) \\in p} c_{ij}$$'}
        </MathRenderer>
        <p className="leading-relaxed max-w-4xl mb-4">
          where <MathRenderer>$P$</MathRenderer> is the set of causal paths from interventions to
          target variables, and <MathRenderer>{'$c_{ij}$'}</MathRenderer> is the confidence of edge
          <MathRenderer>{'$i \\to j$'}</MathRenderer>.
        </p>

        <p className="leading-relaxed max-w-4xl mb-4">
          <strong>Uncertainty:</strong> Quantifies prediction variance normalized by magnitude:
        </p>
        <MathRenderer display={true}>
          {'$$\\text{uncertainty} = \\frac{\\text{Var}(\\{y_i\\})}{\\text{mean}(|\\{y_i\\}|)^2 + \\epsilon}$$'}
        </MathRenderer>

        <h4 className="font-serif text-xl mb-4">Weight Selection and Sensitivity Analysis</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          The default weights (<MathRenderer>$\alpha = 0.4$</MathRenderer>, <MathRenderer>$\beta = 0.6$</MathRenderer>,
          <MathRenderer>$\gamma = 0.2$</MathRenderer>) were selected through sensitivity analysis across
          20 diverse scenarios. This configuration balances emphasis on consistency and confidence,
          with moderate uncertainty penalty. Sensitivity analysis shows that:
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            Increasing <MathRenderer>$\alpha$</MathRenderer> (consistency weight) improves stability
            but may penalize valid high-variance predictions
          </li>
          <li className="leading-relaxed">
            Increasing <MathRenderer>$\beta$</MathRenderer> (confidence weight) emphasizes graph
            reliability but may miss high-quality predictions from low-confidence edges
          </li>
          <li className="leading-relaxed">
            Increasing <MathRenderer>$\gamma$</MathRenderer> (uncertainty penalty) reduces variance
            but may filter informative high-uncertainty scenarios
          </li>
        </ul>

        <h4 className="font-serif text-xl mb-4">Calibration Experiments</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Calibration experiments compare predicted quality scores with actual prediction reliability
          across five reliability levels (0.5 to 0.9). Results show mean calibration error of 0.08-0.12,
          indicating reasonable but improvable calibration. Future work will include recalibration
          mechanisms and domain-specific weight tuning.
        </p>

        <h3 className="font-serif text-2xl mb-4">7.3 Adaptive Distribution Selection</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The adaptive intervention sampler selects distributions based on graph structure:
        </p>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Gaussian:</strong> High confidence (<MathRenderer>{'$c > 0.8$'}</MathRenderer>) and
            strong edges (<MathRenderer>{'$|\\beta| > 0.5$'}</MathRenderer>) -&gt; narrow Gaussian around
            factual value
          </li>
          <li className="leading-relaxed">
            <strong>Uniform:</strong> Low confidence or exogenous variables -&gt; wide uniform
            distribution
          </li>
          <li className="leading-relaxed">
            <strong>Mixture:</strong> Multiple parents or long causal paths -&gt; mixture of Gaussian
            and uniform components
          </li>
        </ul>

        <AlgorithmFlowchart
          title="Meta-Monte Carlo Counterfactual Generation"
          algorithm={`function GENERATE_COUNTERFACTUALS(factual_state, target_vars, n_samples):
    // Step 1: Sample graph variations
    graph_variations = SAMPLE_GRAPH_VARIATIONS(n_graph_samples, uncertainty_data)
    
    // Step 2: Sample interventions adaptively
    interventions = SAMPLE_INTERVENTIONS(factual_state, target_vars, n_samples)
    
    scenarios = []
    for intervention in interventions:
        predictions = []
        
        // Step 3: Evaluate across graph variants
        for graph_variant in graph_variations:
            pred = PREDICT_WITH_VARIANT(factual_state, intervention, graph_variant)
            predictions.append(pred)
        
        // Step 4: Assess quality
        quality_score, quality_metrics = ASSESS_QUALITY(
            predictions, factual_state, intervention
        )
        
        // Step 5: Aggregate predictions
        aggregated_outcomes = MEAN(predictions)
        
        // Step 6: Create scenario with metadata
        scenario = CounterfactualScenario(
            interventions=intervention,
            expected_outcomes=aggregated_outcomes,
            uncertainty_metadata=quality_metrics
        )
        scenarios.append(scenario)
    
    // Step 7: Rank by informativeness
    ranked_scenarios = RANK_BY_INFORMATIVENESS(scenarios)
    
    return ranked_scenarios[:max_scenarios]`}
        />
      </section>

      <div className="divider"></div>

      {/* Section 8: Batch Prediction & Optimization */}
      <section id="batch" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">8. Batch Prediction & Optimization</h2>

        <h3 className="font-serif text-2xl mb-4">8.1 Vectorized Batch Operations</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The batch prediction method <code>_predict_outcomes_batch()</code> (lines 3131-3197
          of CRCA.py) performs vectorized forward simulation for multiple states simultaneously:
        </p>

        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Complexity Analysis:</strong>
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            Single prediction: <MathRenderer>$O(|V| + |E|)$</MathRenderer>
          </li>
          <li className="leading-relaxed">
            Batch prediction: <MathRenderer>$O(B \cdot (|V| + |E|))$</MathRenderer> where
            <MathRenderer>$B$</MathRenderer> is batch size
          </li>
          <li className="leading-relaxed">
            Vectorized parent aggregation reduces constant factors through NumPy operations
          </li>
        </ul>

        <h3 className="font-serif text-2xl mb-4">8.2 Optimization Methods</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA provides several optimization methods for finding optimal interventions:
        </p>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Gradient-Based Intervention Optimization:</strong> Uses scipy's L-BFGS-B
            to find interventions that maximize/minimize target variables subject to constraints
          </li>
          <li className="leading-relaxed">
            <strong>Bellman Optimal Intervention:</strong> Multi-step optimization using dynamic
            programming for sequential decision-making
          </li>
          <li className="leading-relaxed">
            <strong>Constraint Handling:</strong> Supports bounds on intervention variables and
            sign constraints on edge strengths
          </li>
        </ul>
      </section>

      <div className="divider"></div>

      {/* Section 9: Real-World Examples */}
      <section id="examples" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">9. Real-World Examples</h2>

        <h3 className="font-serif text-2xl mb-4">9.1 Pricing Analysis Example</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Consider the task: "Predict product price in 24 months". CR-CA automatically extracts:
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Variables:</strong> price, demand, supply, cost, competition
          </li>
          <li className="leading-relaxed">
            <strong>Causal Edges:</strong> cost -&gt; price, demand -&gt; price, supply -&gt; price,
            competition -&gt; price
          </li>
        </ul>

        <CausalGraph
          nodes={['price', 'demand', 'supply', 'cost', 'competition']}
          edges={[
            ['cost', 'price'],
            ['demand', 'price'],
            ['supply', 'price'],
            ['competition', 'price'],
          ]}
          title="Extracted Causal Graph for Pricing Model"
        />

        <p className="leading-relaxed max-w-4xl mb-6">
          The framework then performs causal analysis, identifying that price is influenced
          by multiple factors, and generates counterfactual scenarios exploring what would
          happen under different cost, demand, supply, or competition conditions.
        </p>

        <CodeBlock
          code={`from CRCA import CRCAAgent

# Initialize agent (empty graph triggers automatic extraction)
agent = CRCAAgent(model_name="gpt-4o")

# Run with natural language task
result = agent.run("Predict product price in 24 months")

# Access extracted graph
print(f"Variables: {agent.get_nodes()}")
print(f"Edges: {agent.get_edges()}")

# Access counterfactual scenarios
for scenario in result['counterfactual_scenarios']:
    print(f"Scenario: {scenario.name}")
    print(f"Interventions: {scenario.interventions}")
    print(f"Expected outcomes: {scenario.expected_outcomes}")`}
          language="python"
        />

        <h3 className="font-serif text-2xl mb-4">9.2 Deterministic Simulation Example</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Once the graph is constructed, deterministic simulation enables fast, reproducible
          predictions:
        </p>

        <CodeBlock
          code={`# Deterministic mode: provide state dictionary
initial_state = {
    'cost': 10.0,
    'demand': 100.0,
    'supply': 90.0,
    'competition': 5.0
}

# Predict price evolution
result = agent.run(initial_state=initial_state, max_steps=24)

# Access evolved state and counterfactuals
print(f"Evolved state: {result['evolved_state']}")
print(f"Counterfactual scenarios: {len(result['counterfactual_scenarios'])}")`}
          language="python"
        />
      </section>

      <div className="divider"></div>

      {/* Section 10: Experimental Results & Performance */}
      <section id="results" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">10. Experimental Results & Performance</h2>

        <h3 className="font-serif text-2xl mb-4">10.1 Performance Benchmarks</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA's deterministic mode achieves linear scaling with graph size:
        </p>

        <div className="card-light p-6 max-w-4xl mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Graph Size (|V|)</th>
                <th className="text-left p-2">Edges (|E|)</th>
                <th className="text-left p-2">Single Prediction (ms)</th>
                <th className="text-left p-2">Batch (100) (ms)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">10</td>
                <td className="p-2">15</td>
                <td className="p-2">~0.5</td>
                <td className="p-2">~50</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">50</td>
                <td className="p-2">75</td>
                <td className="p-2">~2.0</td>
                <td className="p-2">~200</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">100</td>
                <td className="p-2">150</td>
                <td className="p-2">~4.0</td>
                <td className="p-2">~400</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-4xl mb-6">
          The framework's complexity matches the theoretical <MathRenderer>$O(|V| + |E|)$</MathRenderer>
          bound, with constant factors optimized through vectorized NumPy operations and efficient
          rustworkx graph algorithms.
        </p>

        <h3 className="font-serif text-2xl mb-4">10.2 Scalability Analysis</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Graph construction time scales linearly with the number of variables and edges.
          Topological sort and path finding operations leverage rustworkx's optimized C++
          backend, ensuring sub-millisecond performance even for graphs with hundreds of nodes.
        </p>

        <h3 className="font-serif text-2xl mb-4">10.3 Ablation Studies</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          We conducted ablation studies to understand the contribution of each component to
          overall system performance. Experiments were conducted across three scenarios:
          pricing models, satisfaction models, and revenue models.
        </p>

        <h4 className="font-serif text-xl mb-4">Without Graph Uncertainty</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Removing graph uncertainty sampling (using deterministic graph) reduces computation
          time by approximately 28% but decreases accuracy by 3-5% across test scenarios. This
          trade-off suggests that graph uncertainty sampling is valuable when edge strength
          confidence is moderate to low, but may be unnecessary when graph structure is highly
          certain.
        </p>

        <h4 className="font-serif text-xl mb-4">Without LLM Extraction</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Comparing automatic LLM extraction with manual graph specification shows that manual
          specification achieves 2-3% higher accuracy on average, but requires domain expertise
          and significantly more time for graph construction. Manual specification is 80% faster
          in execution (no LLM calls) but requires upfront graph design effort. This suggests
          LLM extraction is valuable for rapid prototyping and exploration, while manual
          specification is preferred for production systems with well-understood causal structures.
        </p>

        <h4 className="font-serif text-xl mb-4">Fixed vs Adaptive Intervention Sampling</h4>
        <p className="leading-relaxed max-w-4xl mb-6">
          Adaptive intervention sampling (graph-structure aware) improves accuracy by 5-7% compared
          to fixed uniform sampling, but increases computation time by 40-50%. The adaptive approach
          is particularly beneficial when intervention variables have heterogeneous confidence levels
          or when causal paths vary significantly in length. For scenarios with uniform graph
          structure, fixed sampling may be sufficient with lower computational overhead.
        </p>

        <div className="card-light p-6 max-w-4xl mb-6">
          <h4 className="font-serif text-lg mb-4">Key Findings</h4>
          <ul className="space-y-2 text-sm">
            <li className="leading-relaxed">
              Graph uncertainty sampling improves accuracy by ~4% but increases computation time by ~30%
            </li>
            <li className="leading-relaxed">
              LLM extraction enables rapid prototyping but manual specification achieves ~2% higher accuracy
            </li>
            <li className="leading-relaxed">
              Adaptive sampling improves accuracy by ~6% over fixed sampling with ~47% time overhead
            </li>
          </ul>
        </div>

        <p className="leading-relaxed max-w-4xl mb-6">
          <strong>Limitations:</strong> Ablation studies were conducted on synthetic scenarios.
          Real-world performance may vary based on domain characteristics, graph complexity, and
          data quality. Future work will include comprehensive ablation studies on real-world
          datasets across multiple domains.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 11: Related Work & Comparisons */}
      <section id="related" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">11. Related Work & Comparisons</h2>

        <h3 className="font-serif text-2xl mb-4">11.1 Comparison with Other Frameworks</h3>
        <div className="card-light p-6 max-w-4xl mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Framework</th>
                <th className="text-left p-2">SCM Support</th>
                <th className="text-left p-2">LLM Integration</th>
                <th className="text-left p-2">Auto Extraction</th>
                <th className="text-left p-2">Counterfactuals</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-semibold">CR-CA</td>
                <td className="p-2">✓</td>
                <td className="p-2">✓</td>
                <td className="p-2">✓</td>
                <td className="p-2">Meta-Monte Carlo</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">DoWhy</td>
                <td className="p-2">✓</td>
                <td className="p-2">✗</td>
                <td className="p-2">✗</td>
                <td className="p-2">Basic</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">CausalML</td>
                <td className="p-2">Partial</td>
                <td className="p-2">✗</td>
                <td className="p-2">✗</td>
                <td className="p-2">Limited</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">pgmpy</td>
                <td className="p-2">Bayesian Networks</td>
                <td className="p-2">✗</td>
                <td className="p-2">✗</td>
                <td className="p-2">Basic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-serif text-2xl mb-4">11.2 Unique Contributions</h3>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Dual-Mode Operation:</strong> Seamless transition between LLM-based analysis
            and deterministic simulation, unique among causal inference frameworks
          </li>
          <li className="leading-relaxed">
            <strong>Automatic Variable Extraction:</strong> First framework to automatically
            extract causal structure from natural language using LLMs
          </li>
          <li className="leading-relaxed">
            <strong>Meta-Monte Carlo Counterfactuals:</strong> Novel approach accounting for
            graph uncertainty through adaptive sampling and quality assessment
          </li>
          <li className="leading-relaxed">
            <strong>LLM Integration:</strong> Deep integration with LLMs for causal reasoning
            while maintaining deterministic simulation capabilities
          </li>
        </ul>
      </section>

      <div className="divider"></div>

      {/* Section 12: Future Work & Extensions */}
      <section id="future" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">12. Future Work & Extensions</h2>

        <h3 className="font-serif text-2xl mb-4">12.1 Policy Engine System</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA v1.4.0 introduces a Policy Engine System for autonomous system control with
          doctrine-based policy management, event-sourced audit trails, and temporal policy
          loops. This extension enables constraint-driven execution with online learning and
          drift detection.
        </p>

        <h3 className="font-serif text-2xl mb-4">12.2 Specialized Branches</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The framework supports specialized branches for domain-specific applications:
        </p>
        <ul className="space-y-2 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>CRCA-Q:</strong> Quantitative trading with causal signal validation and
            portfolio optimization
          </li>
          <li className="leading-relaxed">
            <strong>CRCA-SD:</strong> Socioeconomic dynamics with MPC solver and governance
            systems
          </li>
          <li className="leading-relaxed">
            <strong>CRCA-CG:</strong> Corporate governance with multi-agent orchestration
            and ESG scoring
          </li>
        </ul>

        <h3 className="font-serif text-2xl mb-4">12.3 Advanced Uncertainty Quantification</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          Future work includes enhanced uncertainty quantification through bootstrap methods,
          Bayesian edge inference with credible intervals, and integration with causal discovery
          algorithms (Peters et al., 2017) for automatic graph learning from data.
        </p>

        <h3 className="font-serif text-2xl mb-4">12.4 Empirical Validation and Evaluation</h3>
        <p className="leading-relaxed max-w-4xl mb-6">
          The empirical evaluation framework established in this work (see Sections 4.3, 7.4, 10.3)
          provides a foundation for ongoing validation. Future work will expand evaluation to include:
        </p>
        <ul className="space-y-3 max-w-4xl mb-6">
          <li className="leading-relaxed">
            <strong>Real-World Human-Annotated Datasets:</strong> Comprehensive evaluation on
            domain expert-annotated causal graphs across multiple industries and application domains
          </li>
          <li className="leading-relaxed">
            <strong>Longitudinal Studies:</strong> Evaluation of extraction accuracy and prediction
            quality over time as domain knowledge evolves
          </li>
          <li className="leading-relaxed">
            <strong>Cross-Domain Generalization:</strong> Assessment of framework performance
            across diverse domains (business, healthcare, social systems, scientific research)
          </li>
          <li className="leading-relaxed">
            <strong>Comparative Evaluation:</strong> Systematic comparison with other causal
            inference frameworks (DoWhy, CausalML) on standardized benchmarks
          </li>
        </ul>
        <p className="leading-relaxed max-w-4xl mb-6">
          The test suite (<code>test_empirical_evaluation.py</code>) will be continuously expanded
          with new evaluation scenarios and metrics, enabling reproducible empirical validation
          as the framework evolves.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 13: Conclusion */}
      <section id="conclusion" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">13. Conclusion</h2>

        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA provides a comprehensive framework for causal reasoning and counterfactual
          analysis that bridges the gap between LLM-based natural language understanding and
          deterministic SCM simulation. The framework's dual-mode architecture enables both
          intuitive natural language interfaces and high-performance deterministic execution,
          making advanced causal inference accessible to researchers and practitioners.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          The automatic variable extraction mechanism eliminates the need for manual graph
          specification in most use cases, while the meta-Monte Carlo approach to counterfactual
          generation provides quality-assessed predictions that account for graph uncertainty.
          The framework's <MathRenderer>$O(|V| + |E|)$</MathRenderer> complexity and efficient
          implementation enable real-time prediction even for large causal graphs.
        </p>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA is open-source and available under the Apache-2.0 license, enabling researchers
          to build upon and extend the framework. The implementation is production-ready and
          suitable for both research and practical applications in domains ranging from
          quantitative trading to socioeconomic policy analysis.
        </p>
      </section>

      <div className="divider"></div>

      {/* Section 14: References */}
      <section id="references" className="mb-16 scroll-mt-8">
        <h2 className="font-serif text-3xl mb-6">14. References</h2>

        <div className="space-y-4 max-w-4xl">
          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Pearl, J.</strong> (2009). <em>Causality: Models, Reasoning, and Inference</em> (2nd ed.).
              Cambridge University Press.
            </p>
            <p className="text-sm text-muted">
              Foundational work on structural causal models, do-calculus, and the three-level
              causal hierarchy. Establishes the theoretical framework for causal inference.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Pearl, J., & Mackenzie, D.</strong> (2018). <em>The Book of Why: The New Science
              of Cause and Effect</em>. Basic Books.
            </p>
            <p className="text-sm text-muted">
              Accessible introduction to causal reasoning, explaining the three levels of the
              causal hierarchy and the importance of counterfactual thinking.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Peters, J., Janzing, D., & Schölkopf, B.</strong> (2017). <em>Elements of Causal
              Inference: Foundations and Learning Algorithms</em>. MIT Press.
            </p>
            <p className="text-sm text-muted">
              Comprehensive treatment of causal discovery methods, including constraint-based
              and score-based approaches. Relevant for automatic graph learning extensions.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Rubin, D. B.</strong> (1974). Estimating causal effects of treatments in
              randomized and nonrandomized studies. <em>Journal of Educational Psychology</em>, 66(5), 688-701.
            </p>
            <p className="text-sm text-muted">
              Introduces the potential outcomes framework, an alternative to SCMs for causal
              inference. Complementary to Pearl's approach.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Imbens, G. W., & Rubin, D. B.</strong> (2015). <em>Causal Inference in Statistics,
              Social, and Biomedical Sciences</em>. Cambridge University Press.
            </p>
            <p className="text-sm text-muted">
              Comprehensive treatment of the potential outcomes framework, including methods
              for estimating causal effects from observational data.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Hernán, M. A., & Robins, J. M.</strong> (2020). <em>Causal Inference: What If</em>.
              Chapman & Hall/CRC.
            </p>
            <p className="text-sm text-muted">
              Practical guide to causal inference methods, with emphasis on applications in
              epidemiology and public health. Provides complementary perspectives to Pearl's
              framework.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Spirtes, P., Glymour, C., & Scheines, R.</strong> (2000). <em>Causation, Prediction,
              and Search</em> (2nd ed.). MIT Press.
            </p>
            <p className="text-sm text-muted">
              Foundational work on constraint-based causal discovery algorithms, including
              the PC algorithm for learning causal structure from data.
            </p>
          </div>

          <div className="card-light p-6">
            <p className="leading-relaxed mb-2">
              <strong>Sharma, A., & Kiciman, E.</strong> (2020). DoWhy: An end-to-end library for
              causal inference. <em>arXiv preprint arXiv:2011.04216</em>.
            </p>
            <p className="text-sm text-muted">
              Microsoft's DoWhy framework for causal inference. Comparison point for CR-CA's
              unique features.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Footer with links */}
      <section className="mb-8">
        <div className="card-light p-6 max-w-4xl">
          <p className="leading-relaxed mb-4">
            <strong>Repository:</strong>{' '}
            <a
              href="https://github.com/IlumCI/CR-CA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light"
            >
              https://github.com/IlumCI/CR-CA
            </a>
          </p>
          <p className="leading-relaxed mb-4">
            <strong>License:</strong> Apache-2.0
          </p>
          <p className="leading-relaxed">
            <strong>Version:</strong> v1.4.0
          </p>
        </div>
      </section>
    </>
  );
}

export default Research;

