// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180715preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupProject(ctx *pulumi.Context, args *LookupProjectArgs, opts ...pulumi.InvokeOption) (*LookupProjectResult, error) {
	var rv LookupProjectResult
	err := ctx.Invoke("azure-nextgen:datamigration/v20180715preview:getProject", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupProjectArgs struct {
	// Name of the resource group
	GroupName string `pulumi:"groupName"`
	// Name of the project
	ProjectName string `pulumi:"projectName"`
	// Name of the service
	ServiceName string `pulumi:"serviceName"`
}

// A project resource
type LookupProjectResult struct {
	// UTC Date and time when project was created
	CreationTime string `pulumi:"creationTime"`
	// List of DatabaseInfo
	DatabasesInfo []DatabaseInfoResponse `pulumi:"databasesInfo"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The project's provisioning state
	ProvisioningState string `pulumi:"provisioningState"`
	// Information for connecting to source
	SourceConnectionInfo interface{} `pulumi:"sourceConnectionInfo"`
	// Source platform for the project
	SourcePlatform string `pulumi:"sourcePlatform"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Information for connecting to target
	TargetConnectionInfo interface{} `pulumi:"targetConnectionInfo"`
	// Target platform for the project
	TargetPlatform string `pulumi:"targetPlatform"`
	// Resource type.
	Type string `pulumi:"type"`
}
