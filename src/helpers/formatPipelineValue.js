export function formatPipelineValue(pipelineValue) {
  if (pipelineValue >= 1000000) {
    return (pipelineValue / 1000000).toFixed(1) + 'M'
  } else if (pipelineValue >= 1000) {
    return (pipelineValue / 1000) + 'K'
  } else {
    return pipelineValue.toString()
  }
}