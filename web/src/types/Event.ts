export type IEvent = {
  onSetStepEvent: (data: { nextStep: boolean; confirmation: boolean }) => void;
};

export type IMockedEventItems = {
  name: string;
};
