// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Class that represents a BizTalk Hybrid Connection
type SiteRelayServiceConnection struct {
	pulumi.CustomResourceState

	BiztalkUri             pulumi.StringPtrOutput `pulumi:"biztalkUri"`
	EntityConnectionString pulumi.StringPtrOutput `pulumi:"entityConnectionString"`
	EntityName             pulumi.StringPtrOutput `pulumi:"entityName"`
	Hostname               pulumi.StringPtrOutput `pulumi:"hostname"`
	// Kind of resource
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource Name
	Name                     pulumi.StringPtrOutput `pulumi:"name"`
	Port                     pulumi.IntPtrOutput    `pulumi:"port"`
	ResourceConnectionString pulumi.StringPtrOutput `pulumi:"resourceConnectionString"`
	ResourceType             pulumi.StringPtrOutput `pulumi:"resourceType"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringPtrOutput `pulumi:"type"`
}

// NewSiteRelayServiceConnection registers a new resource with the given unique name, arguments, and options.
func NewSiteRelayServiceConnection(ctx *pulumi.Context,
	name string, args *SiteRelayServiceConnectionArgs, opts ...pulumi.ResourceOption) (*SiteRelayServiceConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.EntityName == nil {
		return nil, errors.New("invalid value for required argument 'EntityName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:SiteRelayServiceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:SiteRelayServiceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:SiteRelayServiceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:SiteRelayServiceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:SiteRelayServiceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:SiteRelayServiceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:SiteRelayServiceConnection"),
		},
	})
	opts = append(opts, aliases)
	var resource SiteRelayServiceConnection
	err := ctx.RegisterResource("azure-nextgen:web/v20150801:SiteRelayServiceConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSiteRelayServiceConnection gets an existing SiteRelayServiceConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSiteRelayServiceConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SiteRelayServiceConnectionState, opts ...pulumi.ResourceOption) (*SiteRelayServiceConnection, error) {
	var resource SiteRelayServiceConnection
	err := ctx.ReadResource("azure-nextgen:web/v20150801:SiteRelayServiceConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SiteRelayServiceConnection resources.
type siteRelayServiceConnectionState struct {
	BiztalkUri             *string `pulumi:"biztalkUri"`
	EntityConnectionString *string `pulumi:"entityConnectionString"`
	EntityName             *string `pulumi:"entityName"`
	Hostname               *string `pulumi:"hostname"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name                     *string `pulumi:"name"`
	Port                     *int    `pulumi:"port"`
	ResourceConnectionString *string `pulumi:"resourceConnectionString"`
	ResourceType             *string `pulumi:"resourceType"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type SiteRelayServiceConnectionState struct {
	BiztalkUri             pulumi.StringPtrInput
	EntityConnectionString pulumi.StringPtrInput
	EntityName             pulumi.StringPtrInput
	Hostname               pulumi.StringPtrInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringPtrInput
	// Resource Name
	Name                     pulumi.StringPtrInput
	Port                     pulumi.IntPtrInput
	ResourceConnectionString pulumi.StringPtrInput
	ResourceType             pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (SiteRelayServiceConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*siteRelayServiceConnectionState)(nil)).Elem()
}

type siteRelayServiceConnectionArgs struct {
	BiztalkUri             *string `pulumi:"biztalkUri"`
	EntityConnectionString *string `pulumi:"entityConnectionString"`
	EntityName             string  `pulumi:"entityName"`
	Hostname               *string `pulumi:"hostname"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location string `pulumi:"location"`
	// Resource Name
	Name                     string  `pulumi:"name"`
	Port                     *int    `pulumi:"port"`
	ResourceConnectionString *string `pulumi:"resourceConnectionString"`
	// The resource group name
	ResourceGroupName string  `pulumi:"resourceGroupName"`
	ResourceType      *string `pulumi:"resourceType"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a SiteRelayServiceConnection resource.
type SiteRelayServiceConnectionArgs struct {
	BiztalkUri             pulumi.StringPtrInput
	EntityConnectionString pulumi.StringPtrInput
	EntityName             pulumi.StringInput
	Hostname               pulumi.StringPtrInput
	// Resource Id
	Id pulumi.StringPtrInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringInput
	// Resource Name
	Name                     pulumi.StringInput
	Port                     pulumi.IntPtrInput
	ResourceConnectionString pulumi.StringPtrInput
	// The resource group name
	ResourceGroupName pulumi.StringInput
	ResourceType      pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (SiteRelayServiceConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*siteRelayServiceConnectionArgs)(nil)).Elem()
}

type SiteRelayServiceConnectionInput interface {
	pulumi.Input

	ToSiteRelayServiceConnectionOutput() SiteRelayServiceConnectionOutput
	ToSiteRelayServiceConnectionOutputWithContext(ctx context.Context) SiteRelayServiceConnectionOutput
}

func (*SiteRelayServiceConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*SiteRelayServiceConnection)(nil))
}

func (i *SiteRelayServiceConnection) ToSiteRelayServiceConnectionOutput() SiteRelayServiceConnectionOutput {
	return i.ToSiteRelayServiceConnectionOutputWithContext(context.Background())
}

func (i *SiteRelayServiceConnection) ToSiteRelayServiceConnectionOutputWithContext(ctx context.Context) SiteRelayServiceConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SiteRelayServiceConnectionOutput)
}

type SiteRelayServiceConnectionOutput struct {
	*pulumi.OutputState
}

func (SiteRelayServiceConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SiteRelayServiceConnection)(nil))
}

func (o SiteRelayServiceConnectionOutput) ToSiteRelayServiceConnectionOutput() SiteRelayServiceConnectionOutput {
	return o
}

func (o SiteRelayServiceConnectionOutput) ToSiteRelayServiceConnectionOutputWithContext(ctx context.Context) SiteRelayServiceConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SiteRelayServiceConnectionOutput{})
}
