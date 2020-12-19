// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents user credentials used for publishing activity
type SiteDeployment struct {
	pulumi.CustomResourceState

	// Active
	Active pulumi.BoolPtrOutput `pulumi:"active"`
	// Author
	Author pulumi.StringPtrOutput `pulumi:"author"`
	// AuthorEmail
	AuthorEmail pulumi.StringPtrOutput `pulumi:"authorEmail"`
	// Deployer
	Deployer pulumi.StringPtrOutput `pulumi:"deployer"`
	// Detail
	Details pulumi.StringPtrOutput `pulumi:"details"`
	// EndTime
	EndTime pulumi.StringPtrOutput `pulumi:"endTime"`
	// Kind of resource
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Location
	Location pulumi.StringOutput `pulumi:"location"`
	// Message
	Message pulumi.StringPtrOutput `pulumi:"message"`
	// Resource Name
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// StartTime
	StartTime pulumi.StringPtrOutput `pulumi:"startTime"`
	// Status
	Status pulumi.IntPtrOutput `pulumi:"status"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringPtrOutput `pulumi:"type"`
}

// NewSiteDeployment registers a new resource with the given unique name, arguments, and options.
func NewSiteDeployment(ctx *pulumi.Context,
	name string, args *SiteDeploymentArgs, opts ...pulumi.ResourceOption) (*SiteDeployment, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Id == nil {
		return nil, errors.New("invalid value for required argument 'Id'")
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
			Type: pulumi.String("azure-nextgen:web/latest:SiteDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:SiteDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:SiteDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:SiteDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:SiteDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:SiteDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:SiteDeployment"),
		},
	})
	opts = append(opts, aliases)
	var resource SiteDeployment
	err := ctx.RegisterResource("azure-nextgen:web/v20150801:SiteDeployment", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSiteDeployment gets an existing SiteDeployment resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSiteDeployment(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SiteDeploymentState, opts ...pulumi.ResourceOption) (*SiteDeployment, error) {
	var resource SiteDeployment
	err := ctx.ReadResource("azure-nextgen:web/v20150801:SiteDeployment", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SiteDeployment resources.
type siteDeploymentState struct {
	// Active
	Active *bool `pulumi:"active"`
	// Author
	Author *string `pulumi:"author"`
	// AuthorEmail
	AuthorEmail *string `pulumi:"authorEmail"`
	// Deployer
	Deployer *string `pulumi:"deployer"`
	// Detail
	Details *string `pulumi:"details"`
	// EndTime
	EndTime *string `pulumi:"endTime"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Message
	Message *string `pulumi:"message"`
	// Resource Name
	Name *string `pulumi:"name"`
	// StartTime
	StartTime *string `pulumi:"startTime"`
	// Status
	Status *int `pulumi:"status"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type SiteDeploymentState struct {
	// Active
	Active pulumi.BoolPtrInput
	// Author
	Author pulumi.StringPtrInput
	// AuthorEmail
	AuthorEmail pulumi.StringPtrInput
	// Deployer
	Deployer pulumi.StringPtrInput
	// Detail
	Details pulumi.StringPtrInput
	// EndTime
	EndTime pulumi.StringPtrInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringPtrInput
	// Message
	Message pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringPtrInput
	// StartTime
	StartTime pulumi.StringPtrInput
	// Status
	Status pulumi.IntPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (SiteDeploymentState) ElementType() reflect.Type {
	return reflect.TypeOf((*siteDeploymentState)(nil)).Elem()
}

type siteDeploymentArgs struct {
	// Active
	Active *bool `pulumi:"active"`
	// Author
	Author *string `pulumi:"author"`
	// AuthorEmail
	AuthorEmail *string `pulumi:"authorEmail"`
	// Deployer
	Deployer *string `pulumi:"deployer"`
	// Detail
	Details *string `pulumi:"details"`
	// EndTime
	EndTime *string `pulumi:"endTime"`
	// Resource Id
	Id string `pulumi:"id"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location string `pulumi:"location"`
	// Message
	Message *string `pulumi:"message"`
	// Resource Name
	Name string `pulumi:"name"`
	// Name of resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// StartTime
	StartTime *string `pulumi:"startTime"`
	// Status
	Status *int `pulumi:"status"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a SiteDeployment resource.
type SiteDeploymentArgs struct {
	// Active
	Active pulumi.BoolPtrInput
	// Author
	Author pulumi.StringPtrInput
	// AuthorEmail
	AuthorEmail pulumi.StringPtrInput
	// Deployer
	Deployer pulumi.StringPtrInput
	// Detail
	Details pulumi.StringPtrInput
	// EndTime
	EndTime pulumi.StringPtrInput
	// Resource Id
	Id pulumi.StringInput
	// Kind of resource
	Kind pulumi.StringPtrInput
	// Resource Location
	Location pulumi.StringInput
	// Message
	Message pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringInput
	// Name of resource group
	ResourceGroupName pulumi.StringInput
	// StartTime
	StartTime pulumi.StringPtrInput
	// Status
	Status pulumi.IntPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (SiteDeploymentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*siteDeploymentArgs)(nil)).Elem()
}

type SiteDeploymentInput interface {
	pulumi.Input

	ToSiteDeploymentOutput() SiteDeploymentOutput
	ToSiteDeploymentOutputWithContext(ctx context.Context) SiteDeploymentOutput
}

func (*SiteDeployment) ElementType() reflect.Type {
	return reflect.TypeOf((*SiteDeployment)(nil))
}

func (i *SiteDeployment) ToSiteDeploymentOutput() SiteDeploymentOutput {
	return i.ToSiteDeploymentOutputWithContext(context.Background())
}

func (i *SiteDeployment) ToSiteDeploymentOutputWithContext(ctx context.Context) SiteDeploymentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SiteDeploymentOutput)
}

type SiteDeploymentOutput struct {
	*pulumi.OutputState
}

func (SiteDeploymentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SiteDeployment)(nil))
}

func (o SiteDeploymentOutput) ToSiteDeploymentOutput() SiteDeploymentOutput {
	return o
}

func (o SiteDeploymentOutput) ToSiteDeploymentOutputWithContext(ctx context.Context) SiteDeploymentOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SiteDeploymentOutput{})
}
