(async () => {
    const fetch = (await import("node-fetch")).default;
  
    const token = "Bearer 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";
    const owner = "ThaoLeLe";
    const repo = "playwright";
    const workflowId = 98682930; // Workflow ID or file name
  
    async function triggerWorkflow(batchNumber) {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`,
          {
            method: "POST",
            headers: {
              "Authorization": token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "ref": "main",
              "inputs": {
                "batch": `${batchNumber}`
              }
            })
          }
        );
  
        if (response.ok) {
          console.log(`Triggered workflow for batch ${batchNumber}`);
        } else {
          console.error(`Failed to trigger workflow for batch ${batchNumber}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Failed to trigger workflow for batch ${batchNumber}: ${error}`);
      }
    }
  
    async function main() {
      const batchCount = 50; // Number of batches
      const promises = [];
      for (let batch = 1; batch <= batchCount; batch++) {
        promises.push(triggerWorkflow(batch));
      }
      await Promise.all(promises);
    }
  
    main().catch(console.error);
  })();
  