// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180715preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A file resource
type File struct {
	pulumi.CustomResourceState

	// HTTP strong entity tag value. This is ignored if submitted.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Custom file properties
	Properties ProjectFilePropertiesResponseOutput `pulumi:"properties"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewFile registers a new resource with the given unique name, arguments, and options.
func NewFile(ctx *pulumi.Context,
	name string, args *FileArgs, opts ...pulumi.ResourceOption) (*File, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FileName == nil {
		return nil, errors.New("invalid value for required argument 'FileName'")
	}
	if args.GroupName == nil {
		return nil, errors.New("invalid value for required argument 'GroupName'")
	}
	if args.ProjectName == nil {
		return nil, errors.New("invalid value for required argument 'ProjectName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	var resource File
	err := ctx.RegisterResource("azure-nextgen:datamigration/v20180715preview:File", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFile gets an existing File resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFile(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FileState, opts ...pulumi.ResourceOption) (*File, error) {
	var resource File
	err := ctx.ReadResource("azure-nextgen:datamigration/v20180715preview:File", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering File resources.
type fileState struct {
	// HTTP strong entity tag value. This is ignored if submitted.
	Etag *string `pulumi:"etag"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Custom file properties
	Properties *ProjectFilePropertiesResponse `pulumi:"properties"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type FileState struct {
	// HTTP strong entity tag value. This is ignored if submitted.
	Etag pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Custom file properties
	Properties ProjectFilePropertiesResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (FileState) ElementType() reflect.Type {
	return reflect.TypeOf((*fileState)(nil)).Elem()
}

type fileArgs struct {
	// HTTP strong entity tag value. This is ignored if submitted.
	Etag *string `pulumi:"etag"`
	// Name of the File
	FileName string `pulumi:"fileName"`
	// Name of the resource group
	GroupName string `pulumi:"groupName"`
	// Name of the project
	ProjectName string `pulumi:"projectName"`
	// Custom file properties
	Properties *ProjectFileProperties `pulumi:"properties"`
	// Name of the service
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a File resource.
type FileArgs struct {
	// HTTP strong entity tag value. This is ignored if submitted.
	Etag pulumi.StringPtrInput
	// Name of the File
	FileName pulumi.StringInput
	// Name of the resource group
	GroupName pulumi.StringInput
	// Name of the project
	ProjectName pulumi.StringInput
	// Custom file properties
	Properties ProjectFilePropertiesPtrInput
	// Name of the service
	ServiceName pulumi.StringInput
}

func (FileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*fileArgs)(nil)).Elem()
}

type FileInput interface {
	pulumi.Input

	ToFileOutput() FileOutput
	ToFileOutputWithContext(ctx context.Context) FileOutput
}

func (File) ElementType() reflect.Type {
	return reflect.TypeOf((*File)(nil)).Elem()
}

func (i File) ToFileOutput() FileOutput {
	return i.ToFileOutputWithContext(context.Background())
}

func (i File) ToFileOutputWithContext(ctx context.Context) FileOutput {
	return pulumi.ToOutputWithContext(ctx, i).(FileOutput)
}

type FileOutput struct {
	*pulumi.OutputState
}

func (FileOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*FileOutput)(nil)).Elem()
}

func (o FileOutput) ToFileOutput() FileOutput {
	return o
}

func (o FileOutput) ToFileOutputWithContext(ctx context.Context) FileOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(FileOutput{})
}
