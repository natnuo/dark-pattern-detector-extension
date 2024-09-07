const post = async (action: string, data: any) => {
  try {

    const res = await fetch(`/${action}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();

      if (res.status === 401) {
        window.location.pathname = "/signout";
        window.location.reload();
        return undefined;
      }
    
      alert(
`Oh no! You found an error!
  
Status: ${res.status}
Error Code: ${errorData.errorID}
Description: ${errorData.errorDesc}

If you believe this error should not have occurred, please report this as an issue. We recommend you screenshot this message and record the error code. Badavas is still in Beta, but we are doing our best to resolve any issues. Thank you for your patience :>`
      );
    
      return undefined;
    }

    // these actions return BLOBs
    const blobActions = new Set([] as string[]);

    return blobActions.has(action) ? res.blob() : res.json();

  } catch (err) {
    console.log(err);
  }
};