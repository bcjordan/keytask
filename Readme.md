# Objective
The goal of this project **in progress** is to construct [a model](http://github.com/bcjordan/keytask/blob/master/keyboard.nnsim) (built using nnsim)
which accurately explains and predicts aspects of typing skill acquisition.

As part of this project, a [keyboarding task platform](http://kbtask.herokuapp.com) is being built and deployed.

# Summary
This project consists of: (1) building and using a platform to collect test data of
keyboard skill acquisition, (2) constructing a model of the keyboard learning process,
(3) tuning model parameters to fit data and assessing their accuracy in modeling differing tasks, 
and (4) using observations about model behavior to assess current keyboard learning methodologies.

# Model demonstration
This project has two key deliverables: the keyboarding task test platform and the keyboarding model.

The keyboarding task platform will be a web-based tool which displays a sequence of symbols, collects
user key press responses, and (optionally) presents the user with keying accuracy feedback. This will
be constructed using an HTML5/Javascript front-end task communicating results to a remote database via AJAX. The 
advantage of this approach is that tasks can be completed remotely on any computing platform by many
users simultaneously.

The initial keyboarding model will be constructed using the NNSim framework. NNSim will be used to play with
different neural network topologies, update rules and functionally important model parameters. The behavior
of this model will be tuned with intuition about key learning behavior. Time permitting, a version of the
model may be constructed which can interact with the keyboarding task platform, modeling the
test subject's current knowledge state in real time. Depending on the flexibility and update rule required by the model, pre-built neural network packages such as <a href="http://harthur.github.com/brain/">brain.js</a> may be used.