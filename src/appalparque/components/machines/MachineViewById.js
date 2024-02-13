import React, { Component } from 'react';
import MachineView from "./MachineView";
import machinesList from "../../resources/machines.json";

export default class MachineViewById extends Component {
  constructor(props) {
    super(props);
  }

  GetMachineById(machineId) {
    return machinesList
      .filter(machine => machine.id == machineId)[0];
  }

  render() {
    return (
      <MachineView
        navigation={this.props.navigation}
        machine={this.GetMachineById(this.props.machineId)}
      />
    );
  }
}