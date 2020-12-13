// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupJob(ctx *pulumi.Context, args *LookupJobArgs, opts ...pulumi.InvokeOption) (*LookupJobResult, error) {
	var rv LookupJobResult
	err := ctx.Invoke("azure-nextgen:databox/v20201101:getJob", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupJobArgs struct {
	// $expand is supported on details parameter for job, which provides details on the job stages.
	Expand *string `pulumi:"expand"`
	// The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
	JobName string `pulumi:"jobName"`
	// The Resource Group Name
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Job Resource.
type LookupJobResult struct {
	// Reason for cancellation.
	CancellationReason string `pulumi:"cancellationReason"`
	// Delivery Info of Job.
	DeliveryInfo *JobDeliveryInfoResponse `pulumi:"deliveryInfo"`
	// Delivery type of Job.
	DeliveryType *string `pulumi:"deliveryType"`
	// Details of a job run. This field will only be sent for expand details filter.
	Details interface{} `pulumi:"details"`
	// Top level error for the job.
	Error CloudErrorResponse `pulumi:"error"`
	// Id of the object.
	Id string `pulumi:"id"`
	// Msi identity of the resource
	Identity *ResourceIdentityResponse `pulumi:"identity"`
	// Describes whether the job is cancellable or not.
	IsCancellable bool `pulumi:"isCancellable"`
	// Flag to indicate cancellation of scheduled job.
	IsCancellableWithoutFee bool `pulumi:"isCancellableWithoutFee"`
	// Describes whether the job is deletable or not.
	IsDeletable bool `pulumi:"isDeletable"`
	// Is Prepare To Ship Enabled on this job
	IsPrepareToShipEnabled bool `pulumi:"isPrepareToShipEnabled"`
	// Describes whether the shipping address is editable or not.
	IsShippingAddressEditable bool `pulumi:"isShippingAddressEditable"`
	// The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
	Location string `pulumi:"location"`
	// Name of the object.
	Name string `pulumi:"name"`
	// The sku type.
	Sku SkuResponse `pulumi:"sku"`
	// Time at which the job was started in UTC ISO 8601 format.
	StartTime string `pulumi:"startTime"`
	// Name of the stage which is in progress.
	Status string `pulumi:"status"`
	// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
	Tags map[string]string `pulumi:"tags"`
	// Type of the data transfer.
	TransferType string `pulumi:"transferType"`
	// Type of the object.
	Type string `pulumi:"type"`
}
