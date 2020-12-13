// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBigDataPool(ctx *pulumi.Context, args *LookupBigDataPoolArgs, opts ...pulumi.InvokeOption) (*LookupBigDataPoolResult, error) {
	var rv LookupBigDataPoolResult
	err := ctx.Invoke("azure-nextgen:synapse/v20190601preview:getBigDataPool", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBigDataPoolArgs struct {
	// Big Data pool name
	BigDataPoolName string `pulumi:"bigDataPoolName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the workspace
	WorkspaceName string `pulumi:"workspaceName"`
}

// A Big Data pool
type LookupBigDataPoolResult struct {
	// Auto-pausing properties
	AutoPause *AutoPausePropertiesResponse `pulumi:"autoPause"`
	// Auto-scaling properties
	AutoScale *AutoScalePropertiesResponse `pulumi:"autoScale"`
	// The time when the Big Data pool was created.
	CreationDate *string `pulumi:"creationDate"`
	// The default folder where Spark logs will be written.
	DefaultSparkLogFolder *string `pulumi:"defaultSparkLogFolder"`
	// Whether library requirements changed.
	HaveLibraryRequirementsChanged *bool `pulumi:"haveLibraryRequirementsChanged"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Whether compute isolation is required or not.
	IsComputeIsolationEnabled *bool `pulumi:"isComputeIsolationEnabled"`
	// Library version requirements
	LibraryRequirements *LibraryRequirementsResponse `pulumi:"libraryRequirements"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The number of nodes in the Big Data pool.
	NodeCount *int `pulumi:"nodeCount"`
	// The level of compute power that each node in the Big Data pool has.
	NodeSize *string `pulumi:"nodeSize"`
	// The kind of nodes that the Big Data pool provides.
	NodeSizeFamily *string `pulumi:"nodeSizeFamily"`
	// The state of the Big Data pool.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Whether session level packages enabled.
	SessionLevelPackagesEnabled *bool `pulumi:"sessionLevelPackagesEnabled"`
	// Spark configuration file to specify additional properties
	SparkConfigProperties *LibraryRequirementsResponse `pulumi:"sparkConfigProperties"`
	// The Spark events folder
	SparkEventsFolder *string `pulumi:"sparkEventsFolder"`
	// The Apache Spark version.
	SparkVersion *string `pulumi:"sparkVersion"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
