// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupMaintenanceConfiguration(ctx *pulumi.Context, args *LookupMaintenanceConfigurationArgs, opts ...pulumi.InvokeOption) (*LookupMaintenanceConfigurationResult, error) {
	var rv LookupMaintenanceConfigurationResult
	err := ctx.Invoke("azure-nextgen:maintenance/v20180601preview:getMaintenanceConfiguration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupMaintenanceConfigurationArgs struct {
	// Resource Group Name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource Identifier
	ResourceName string `pulumi:"resourceName"`
}

// Maintenance configuration record type
type LookupMaintenanceConfigurationResult struct {
	// Gets or sets extensionProperties of the maintenanceConfiguration
	ExtensionProperties map[string]string `pulumi:"extensionProperties"`
	// Fully qualified identifier of the resource
	Id string `pulumi:"id"`
	// Gets or sets location of the resource
	Location *string `pulumi:"location"`
	// Gets or sets maintenanceScope of the configuration
	MaintenanceScope *string `pulumi:"maintenanceScope"`
	// Name of the resource
	Name string `pulumi:"name"`
	// Gets or sets namespace of the resource
	Namespace *string `pulumi:"namespace"`
	// Gets or sets tags of the resource
	Tags map[string]string `pulumi:"tags"`
	// Type of the resource
	Type string `pulumi:"type"`
}
