// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupJobDefinition(ctx *pulumi.Context, args *LookupJobDefinitionArgs, opts ...pulumi.InvokeOption) (*LookupJobDefinitionResult, error) {
	var rv LookupJobDefinitionResult
	err := ctx.Invoke("azure-nextgen:hybriddata/latest:getJobDefinition", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupJobDefinitionArgs struct {
	// The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
	DataManagerName string `pulumi:"dataManagerName"`
	// The data service name of the job definition
	DataServiceName string `pulumi:"dataServiceName"`
	// The job definition name that is being queried.
	JobDefinitionName string `pulumi:"jobDefinitionName"`
	// The Resource Group Name
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Job Definition.
type LookupJobDefinitionResult struct {
	// List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
	CustomerSecrets []CustomerSecretResponse `pulumi:"customerSecrets"`
	// A generic json used differently by each data service type.
	DataServiceInput interface{} `pulumi:"dataServiceInput"`
	// Data Sink Id associated to the job definition.
	DataSinkId string `pulumi:"dataSinkId"`
	// Data Source Id associated to the job definition.
	DataSourceId string `pulumi:"dataSourceId"`
	// Id of the object.
	Id string `pulumi:"id"`
	// Last modified time of the job definition.
	LastModifiedTime *string `pulumi:"lastModifiedTime"`
	// Name of the object.
	Name string `pulumi:"name"`
	// This is the preferred geo location for the job to run.
	RunLocation *string `pulumi:"runLocation"`
	// Schedule for running the job definition
	Schedules []ScheduleResponse `pulumi:"schedules"`
	// State of the job definition.
	State string `pulumi:"state"`
	// Type of the object.
	Type string `pulumi:"type"`
	// Enum to detect if user confirmation is required. If not passed will default to NotRequired.
	UserConfirmation *string `pulumi:"userConfirmation"`
}
